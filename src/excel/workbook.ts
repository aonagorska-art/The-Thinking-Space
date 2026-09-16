import {evaluate,FormulaError,copyFormula,valuesEqual,type Scalar,type Value} from './engine';
import {exercises} from './exercises';
export type Grid=Record<string,string>;
export const ROWS=20,COLS=8;
export const address=(r:number,c:number)=>String.fromCharCode(65+c)+(r+1);
export const position=(id:string)=>({r:Number(id.replace(/\D/g,''))-1,c:id.charCodeAt(0)-65});
export function initialGrid(id:string):Grid{return Object.fromEntries(Object.entries(exercises[id].cells).map(([k,v])=>[k,v===null?'':String(v)]));}
export function parseLiteral(raw:string):Scalar{const s=raw.trim();if(!s)return null;if(s.startsWith("'"))return raw.slice(raw.indexOf("'")+1);if(/^[-+]?\d+(?:[.,]\d+)?%$/.test(s))return Number(s.slice(0,-1).replace(',','.'))/100;if(/^[-+]?(?:\d+(?:[.,]\d*)?|[.,]\d+)$/.test(s))return Number(s.replace(',','.'));if(/^(true|false)$/i.test(s))return s.toLowerCase()==='true';return raw;}
const first=(v:Value):Scalar=>Array.isArray(v)?first(v[0]??null):v;
const errorCode=(e:unknown)=>e instanceof FormulaError?({cycle:'#CYCLE!',unsupported:'#NAME?',zero:'#DIV/0!',range:'#REF!'}[e.code]??'#VALUE!'):'#VALUE!';
export function calculate(grid:Grid){
 let spill:Record<string,{owner:string;value:Scalar}>={};
 let values:Record<string,Value>={};
 // First pass discovers array destinations; second resolves formulas that refer to them.
 for(let pass=0;pass<2;pass++){
  values={};const visiting=new Set<string>();
  const resolve=(id:string):Scalar=>{if(visiting.has(id))throw new FormulaError('cycle');if(id in values)return first(values[id]);const raw=grid[id]??'';if(!raw&&spill[id]){if(visiting.has(spill[id].owner))throw new FormulaError('cycle');return spill[id].value;}visiting.add(id);try{values[id]=raw.trim().startsWith('=')?evaluate(raw,resolve):parseLiteral(raw);}catch(e){values[id]=errorCode(e);}finally{visiting.delete(id);}return first(values[id]);};
  for(const id of Object.keys(grid))resolve(id);
  const next:typeof spill={};
  for(const [id,v] of Object.entries(values)){if(!Array.isArray(v))continue;const p=position(id);const matrix:Value[][]=v.map(row=>Array.isArray(row)?row:[row]);const cells=matrix.flatMap((row,r)=>row.map((value,c)=>({id:address(p.r+r,p.c+c),value:first(value),r:p.r+r,c:p.c+c})));
   if(cells.some(cell=>cell.r>=ROWS||cell.c>=COLS||cell.id!==id&&!!grid[cell.id]||!!next[cell.id])){values[id]='#SPILL!';continue;}
   for(const cell of cells)if(cell.id!==id)next[cell.id]={owner:id,value:cell.value};
  }spill=next;
 }
 const cells:Record<string,Scalar>=Object.fromEntries(Object.entries(values).map(([id,v])=>[id,first(v)]));for(const [id,s] of Object.entries(spill))cells[id]=s.value;
 return {cells,values,spill};
}
export function validateGrid(value:unknown):Grid{if(!value||typeof value!=='object'||Array.isArray(value))throw Error('Invalid grid');const result:Grid={};for(const [id,v] of Object.entries(value)){const p=position(id);if(!/^[A-H](?:[1-9]|1\d|20)$/.test(id)||p.r>=ROWS||typeof v!=='string'||v.length>1000)throw Error('Invalid grid');result[id]=v;}return result;}
export function pasteGrid(grid:Grid,text:string,start:string,origin?:string):Grid{const rows=text.replace(/\r/g,'').replace(/\n$/,'').split('\n').map(row=>row.split('\t'));if(rows.length>ROWS||rows.some(r=>r.length>COLS))throw Error('Paste too large');const p=position(start),from=origin?position(origin):null;const next={...grid};for(let r=0;r<rows.length;r++)for(let c=0;c<rows[r].length;c++){if(p.r+r>=ROWS||p.c+c>=COLS)throw Error('Paste exceeds grid');const raw=rows[r][c];if(raw.length>1000)throw Error('Cell too long');next[address(p.r+r,p.c+c)]=from&&raw.startsWith('=')?copyFormula(raw,p.r-from.r,p.c-from.c):raw;}return next;}
export function gradeGrid(id:string,grid:Grid):'correct'|'wrong'|'robust'|'empty'|'incomplete'|'unsupported'{const ex=exercises[id],p=position(ex.target);if(!(grid[ex.target]??'').trim().startsWith('='))return 'empty';
 const base={...grid,...initialGrid(id)};const calc=calculate(base);if(calc.cells[ex.target]==='#NAME?')return 'unsupported';if(!valuesEqual(calc.values[ex.target],ex.expected))return 'wrong';
 for(let i=1;i<=(ex.copyRows??0);i++){const cell=address(p.r+i,p.c);if(!(grid[cell]??'').trim().startsWith('='))return 'incomplete';if(!valuesEqual(calc.cells[cell],ex.copiedExpected![i-1]))return 'robust';}
 for(const alt of ex.alternatives??[]){const scenario={...base,...Object.fromEntries(Object.entries(alt.cells).map(([k,v])=>[k,v===null?'':String(v)]))};if(!valuesEqual(calculate(scenario).values[ex.target],alt.expected))return 'robust';}return 'correct';}
