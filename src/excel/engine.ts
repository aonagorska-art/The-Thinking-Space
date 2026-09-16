export type Scalar=number|string|boolean|null;
export type Value=Scalar|Value[];
export type Cells=Record<string,Scalar>;
const aliases:Record<string,string>={'SUMA':'SUM','ŚREDNIA':'AVERAGE','SUMA.WARUNKÓW':'SUMIFS','LICZ.JEŻELI':'COUNTIF','X.WYSZUKAJ':'XLOOKUP','SORTUJ':'SORT','UNIKATOWE':'UNIQUE','FILTRUJ':'FILTER','SUMA.ILOCZYNÓW':'SUMPRODUCT','JEŻELI.BŁĄD':'IFERROR','JEŻELI':'IF','ZAOKR':'ROUND','СУММ':'SUM','СРЗНАЧ':'AVERAGE','ЕСЛИ':'IF','СЧЁТЕСЛИ':'COUNTIF','СУММЕСЛИМН':'SUMIFS'};
export class FormulaError extends Error{constructor(public code:string){super(code)}}
const flat=(v:Value):Scalar[]=>Array.isArray(v)?v.flatMap(flat):[v];
const numeric=(v:Value):number=>{if(Array.isArray(v))throw new FormulaError('shape');if(typeof v==='string'&&v.startsWith('#'))throw new FormulaError('cell');const n=Number(v);if(!Number.isFinite(n))throw new FormulaError('value');return n;};
function map2(a:Value,b:Value,f:(a:Scalar,b:Scalar)=>Scalar):Value{if(Array.isArray(a)||Array.isArray(b)){const aa=Array.isArray(a)?a:null,bb=Array.isArray(b)?b:null;if(aa&&bb&&aa.length!==bb.length)throw new FormulaError('shape');return (aa??bb!).map((_,i)=>map2(aa?aa[i]:a,bb?bb[i]:b,f));}return f(a,b);}
const equal=(a:Scalar,b:Scalar)=>((a===null&&b==='')||(b===null&&a===''))?true:typeof a==='string'&&typeof b==='string'?a.toLowerCase()===b.toLowerCase():a===b;
export function evaluate(formula:string,cells:Cells|((id:string)=>Scalar)):Value{
 if(formula.length>1000)throw new FormulaError('limit');if(!formula.trim().startsWith('='))throw new FormulaError('equals');
 const source=formula.trim().slice(1),tokens:string[]=[];const re=/\s*("(?:[^"]|"")*"|\$?[A-Za-z]+\$?\d+|[\p{L}_][\p{L}\p{N}_.]*|\d+(?:\.\d+)?|>=|<=|<>|[+\-*/^%=(),;:<>])/uy;let offset=0;
 while(offset<source.length){if(!source.slice(offset).trim())break;re.lastIndex=offset;const m=re.exec(source);if(!m)throw new FormulaError('syntax');tokens.push(m[1]);offset=re.lastIndex;if(tokens.length>400)throw new FormulaError('limit');}
 let pos=0;const peek=()=>tokens[pos];const take=()=>tokens[pos++];const expect=(s:string)=>{if(take()!==s)throw new FormulaError('syntax');};
 const readCell=(id:string)=>(typeof cells==='function'?cells(id.replaceAll('$','').toUpperCase()):cells[id.replaceAll('$','').toUpperCase()])??null;
 function range(a:string,b:string):Value{const col=(s:string)=>s.replace(/[^A-Za-z]/g,'').toUpperCase().split('').reduce((v,c)=>v*26+c.charCodeAt(0)-64,0);const row=(s:string)=>Number(s.replace(/\D/g,''));const name=(n:number):string=>n>26?name(Math.floor((n-1)/26))+String.fromCharCode(65+(n-1)%26):String.fromCharCode(64+n);const out:Value[]=[];if(col(b)<col(a)||row(b)<row(a)||(col(b)-col(a)+1)*(row(b)-row(a)+1)>500)throw new FormulaError('range');for(let r=row(a);r<=row(b);r++){const line:Scalar[]=[];for(let c=col(a);c<=col(b);c++)line.push(readCell(name(c)+r));out.push(line);}return out;}
 function primary():Value{const t=take();if(!t)throw new FormulaError('syntax');if(t==='('){const v=expr();expect(')');return v;}if(t==='-'||t==='+')return map2(0,primary(),(a,b)=>t==='-'?-numeric(b):numeric(b));if(t.startsWith('"'))return t.slice(1,-1).replaceAll('""','"');if(/^\d/.test(t))return Number(t);if(/^\$?[A-Za-z]+\$?\d+$/.test(t)){if(peek()===':'){take();const end=take();if(!/^\$?[A-Za-z]+\$?\d+$/.test(end??''))throw new FormulaError('syntax');return range(t,end);}return readCell(t);}const name=aliases[t.toUpperCase()]??t.toUpperCase();if(['TRUE','PRAWDA'].includes(name))return true;if(['FALSE','FAŁSZ'].includes(name))return false;expect('(');const args:Value[]=[];if(peek()!==')'){do{args.push(expr());if(peek()!==','&&peek()!==';')break;take();}while(true);}expect(')');return call(name,args);}
 const ranks:Record<string,number>={'=':1,'<>':1,'>':1,'<':1,'>=':1,'<=':1,'+':2,'-':2,'*':3,'/':3,'^':4};
 function expr(min=0):Value{let a=primary();while(peek()==='%'){take();a=map2(a,100,(x,y)=>numeric(x)/numeric(y));}while((ranks[peek()]??-1)>=min){const op=take(),b=expr(ranks[op]+1);a=map2(a,b,(x,y)=>{switch(op){case '+':return numeric(x)+numeric(y);case '-':return numeric(x)-numeric(y);case '*':return numeric(x)*numeric(y);case '/':if(numeric(y)===0)throw new FormulaError('zero');return numeric(x)/numeric(y);case '^':return numeric(x)**numeric(y);case '=':return equal(x,y);case '<>':return !equal(x,y);case '>':return numeric(x)>numeric(y);case '<':return numeric(x)<numeric(y);case '>=':return numeric(x)>=numeric(y);default:return numeric(x)<=numeric(y);}});}return a;}
 function call(n:string,a:Value[]):Value{
 const arity=(min:number,max=min)=>{if(a.length<min||a.length>max)throw new FormulaError('arguments');};
 switch(n){
 case 'SUM':case 'AVERAGE':{arity(1,30);const vals=a.flatMap(flat).filter(v=>typeof v==='number'||typeof v==='string'&&v.startsWith('#'));if(n==='AVERAGE'&&!vals.length)throw new FormulaError('zero');return vals.reduce<number>((s,v)=>s+numeric(v),0)/(n==='AVERAGE'?vals.length:1);}
 case 'IFERROR':arity(2);return map2(a[0],a[1],(v,f)=>typeof v==='string'&&v.startsWith('#')?f:v);
 case 'IF':arity(3);return map2(a[0],map2(a[1],a[2],(x,y)=>JSON.stringify([x,y])),(v,p)=>JSON.parse(String(p))[v?0:1]);
 case 'ROUND':arity(2);return map2(a[0],a[1],(x,y)=>Math.round((numeric(x)+Number.EPSILON)*10**numeric(y))/10**numeric(y));
 case 'SUMPRODUCT':{arity(1,10);let v=a[0];for(const next of a.slice(1))v=map2(v,next,(x,y)=>numeric(x)*numeric(y));return flat(v).reduce<number>((s,x)=>s+numeric(x),0);}
 case 'COUNTIF':{arity(2);return flat(a[0]).filter(v=>equal(v,flat(a[1])[0])).length;}
 case 'SUMIFS':{if(a.length<3||a.length%2!==1)throw new FormulaError('arguments');const vals=flat(a[0]);let mask=vals.map(()=>true);for(let i=1;i<a.length;i+=2){const range=flat(a[i]);if(range.length!==vals.length)throw new FormulaError('shape');mask=mask.map((v,k)=>v&&equal(range[k],flat(a[i+1])[0]));}return vals.reduce<number>((s,v,i)=>s+(mask[i]?numeric(v):0),0);}
 case 'XLOOKUP':{arity(3,4);const keys=flat(a[1]),values=flat(a[2]);if(keys.length!==values.length)throw new FormulaError('shape');const i=keys.findIndex(v=>equal(v,flat(a[0])[0]));return i<0?(a[3]??'#N/A'):values[i];}
 case 'FILTER':{arity(2,3);const vals=flat(a[0]),mask=flat(a[1]);if(vals.length!==mask.length)throw new FormulaError('shape');const result=vals.filter((_,i)=>Boolean(mask[i]));return result.length?result:(a[2]??'#CALC!');}
 case 'UNIQUE':arity(1);return flat(a[0]).filter((v,i,all)=>all.findIndex(x=>equal(x,v))===i);
 case 'SORT':arity(1);return [...flat(a[0])].sort((x,y)=>typeof x==='number'&&typeof y==='number'?x-y:String(x).localeCompare(String(y),'en'));
 default:throw new FormulaError('unsupported');}
 }
 const result=expr();if(pos!==tokens.length)throw new FormulaError('syntax');return result;
}
export function valuesEqual(a:Value,b:Value):boolean{const aa=flat(a),bb=flat(b);return aa.length===bb.length&&aa.every((v,i)=>typeof v==='number'&&typeof bb[i]==='number'?Math.abs(v-Number(bb[i]))<1e-8:equal(v,bb[i]));}
export function copyFormula(formula:string,rows:number,cols=0):string{return formula.split(/("(?:[^"]|"")*")/g).map((part,i)=>i%2?part:part.replace(/(\$?)([A-Za-z]+)(\$?)(\d+)/g,(_,cl,c,rl,r)=>{let col=c.toUpperCase().split('').reduce((v:number,n:string)=>v*26+n.charCodeAt(0)-64,0);col=Number(col)+(cl?0:cols);const row=Number(r)+(rl?0:rows);if(col<1||row<1)return '#REF!';let name='';while(col){name=String.fromCharCode(65+(col-1)%26)+name;col=Math.floor((col-1)/26);}return cl+name+rl+row;})).join('');}
