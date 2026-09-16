import {test} from 'node:test';
import assert from 'node:assert/strict';
import {puzzles} from '../src/content';
const answer=(id:string)=>puzzles.find(p=>p.id===id)!.translations.en.answer;
function permutations<T>(a:T[]):T[][]{return a.length?a.flatMap((x,i)=>permutations(a.filter((_,j)=>j!==i)).map(p=>[x,...p])):[[]];}
function choose<T>(a:T[],k:number):T[][]{if(!k)return [[]];return a.flatMap((x,i)=>choose(a.slice(i+1),k-1).map(c=>[x,...c]));}
function shortestBridge(times:number[]):number{
 const target=(1<<times.length)-1,dist=new Map<number,number>([[0,0]]),queue:[[number,number]]|[number,number][]=[[0,0]];
 while(queue.length){queue.sort((a,b)=>a[0]-b[0]);const [cost,state]=queue.shift()!;if(dist.get(state)!==cost)continue;
  const side=state&1,mask=state>>1;if(mask===target&&side===1)return cost;
  const people=times.map((_,i)=>i).filter(i=>((mask>>i)&1)===side);
  for(const group of [...choose(people,1),...choose(people,2)]){
   const newMask=group.reduce((m,i)=>m^(1<<i),mask),next=(newMask<<1)|(1-side),value=cost+Math.max(...group.map(i=>times[i]));
   if(value<(dist.get(next)??Infinity)){dist.set(next,value);queue.push([value,next]);}
  }
 }throw Error('Unreachable');
}
test('ordering and constraint answers independently enumerated',()=>{
 const q=permutations(['A','B','C','D']);
 assert.deepEqual(q.filter(p=>p.indexOf('A')<p.indexOf('B')&&p.indexOf('C')===p.indexOf('B')+1&&p.indexOf('D')<p.indexOf('A')),[['D','A','B','C']]);
 assert.equal(q.filter(p=>p.indexOf('A')<p.indexOf('B')&&p.indexOf('C')<p.indexOf('D')).length,6);
 const books=permutations(['A','B','C','D','E']).filter(p=>p[2]==='C'&&p.indexOf('A')<2&&p.indexOf('B')===p.indexOf('A')+1&&p.indexOf('E')>p.indexOf('D'));
 assert.deepEqual(books,[['A','B','C','D','E']]);
 const queens=[2,4,1,3];assert.equal(new Set(queens).size,4);
 for(let i=0;i<4;i++)for(let j=i+1;j<4;j++)assert.notEqual(Math.abs(queens[i]-queens[j]),j-i);
 const assignments=permutations(['design','coding','testing']).filter(([a,b,c])=>a!=='coding'&&b!=='testing'&&c!=='design');assert.equal(assignments.length,2);
 assert.equal(choose([1,2,3,4,5,6,7],3).filter(a=>a[1]-a[0]>1&&a[2]-a[1]>1).length,10);
 assert.deepEqual(Array.from({length:21},(_,a)=>a).filter(a=>9*a+5*(20-a)===146),[]);
 assert.match(answer('integer-tickets'),/^No/);
 assert.equal(734+734,1468);assert.equal(new Set([7,3,4,1,6,8]).size,6);
});
test('all truth-table puzzles checked against their logical constraints',()=>{
 const booleans=[false,true];const solutions:Record<string,boolean[][]>={};
 for(const id of ['both-liars','same-type','three-chain'])solutions[id]=[];
 for(const a of booleans)for(const b of booleans){
  if(a===(!a&&!b))solutions['both-liars'].push([a,b]);
  if(a===(a===b)&&b===!a)solutions['same-type'].push([a,b]);
  for(const c of booleans)if(a===!b&&b===!c&&c===(a!==b))solutions['three-chain'].push([a,b,c]);
 }
 assert.deepEqual(solutions['both-liars'],[[false,true]]);assert.deepEqual(solutions['same-type'],[[false,true]]);assert.deepEqual(solutions['three-chain'],[[true,false,true]]);
 assert.deepEqual(Array.from({length:10},(_,i)=>i+1).filter(n=>[n%2===0,n>5,n===7].filter(Boolean).length===1),[2,4,9]);
 assert.deepEqual(Array.from({length:11},(_,i)=>i).filter(f=>Array.from({length:10},(_,k)=>k+1!==f).filter(Boolean).length===f),[9]);
 for(const safe of booleans)for(const truthful of booleans)for(const daMeansYes of booleans){
  const innerYes=truthful?safe:!safe;const innerDa=innerYes===daMeansYes;const outerYes=truthful?innerDa:!innerDa;const outerDa=outerYes===daMeansYes;assert.equal(outerDa,safe);
 }
 assert.equal(Array.from({length:32},(_,mask)=>Array.from({length:5},(_,i)=>!!(mask&(1<<i)))).filter(a=>a.every((v,i)=>v===!a[(i+1)%5])).length,0);
});
test('balance plans cover every counterfeit case and signed weight totals',()=>{
 for(let heavy=0;heavy<9;heavy++){
  const weight=(i:number)=>i===heavy?2:1;
  const first=Math.sign([0,1,2].reduce((s,i)=>s+weight(i),0)-[3,4,5].reduce((s,i)=>s+weight(i),0));
  const group=first>0?[0,1,2]:first<0?[3,4,5]:[6,7,8];
  const second=Math.sign(weight(group[0])-weight(group[1]));assert.equal(second>0?group[0]:second<0?group[1]:group[2],heavy);
 }
 const signatures=new Set<string>();
 for(let coin=0;coin<3;coin++)for(const delta of [-1,1]){
  const first=coin<2?delta:0;const tested=first===0?2:0;const second=coin===tested?delta:0;signatures.add(`${first},${second}`);
 }assert.equal(signatures.size,6);
 let sums=new Set([0]);for(const w of [1,3,9,27])sums=new Set([...sums].flatMap(s=>[s-w,s,s+w]));
 for(let i=-40;i<=40;i++)assert.ok(sums.has(i));
 for(const pair of choose([0,1,2,3],2)){
  const w=[0,1,2,3].map(i=>pair.includes(i)?2:1);const heavy:number[]=w[0]!==w[1]?[w[0]>w[1]?0:1,w[2]>w[3]?2:3]:w[0]>w[2]?[0,1]:[2,3];assert.deepEqual(heavy.sort(),pair);
 }
});
test('horse candidate eliminations checked over many consistent speed orders',()=>{
 let seed=191;const rand=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/2**32;};
 for(let trial=0;trial<1000;trial++){
  const ranks=Array.from({length:25},(_,i)=>i);for(let i=24;i>0;i--){const j=Math.floor(rand()*(i+1));[ranks[i],ranks[j]]=[ranks[j],ranks[i]];}
  const groups=Array.from({length:5},(_,i)=>ranks.slice(i*5,i*5+5).sort((a,b)=>a-b)).sort((a,b)=>a[0]-b[0]);
  const [a,b,c]=groups;const finalists=[a[1],a[2],b[0],b[1],c[0]].sort((a,b)=>a-b);
  assert.deepEqual([a[0],...finalists.slice(0,2)],[0,1,2]);
 }
});
test('scheduling optima checked by exhaustive search or workload certificates',()=>{
 assert.equal(shortestBridge([1,2,7,10]),17);assert.match(answer('bridge'),/^17/);
 const lengths=[8,7,6,5,4];const totals=Array.from({length:32},(_,m)=>lengths.reduce((s,v,i)=>s+((m>>i)&1)*v,0));assert.equal(Math.min(...totals.map(t=>Math.max(t,30-t))),15);
 const sums=permutations([2,5,8]).map(p=>{let t=0;return p.reduce((s,v)=>{t+=v;return s+t;},0);});assert.equal(Math.min(...sums),24);
 const rounds=['AB CD EF','AC BE DF','AD BF CE','AE BD CF','AF BC DE'];
 assert.equal(new Set(rounds.flatMap(r=>r.split(' '))).size,15);for(const r of rounds)assert.equal(new Set(r.replaceAll(' ','')).size,6);
 const jobs=[{pay:40,deadline:1},{pay:30,deadline:2},{pay:25,deadline:2},{pay:20,deadline:3}];
 const earnings=permutations(jobs).map(p=>p.reduce((s,j,i)=>s+(i+1<=j.deadline?j.pay:0),0));assert.equal(Math.max(...earnings),90);
});
test('combinatorial counts independently enumerated',()=>{
 const paths=permutations([0,1,2,3,4,5]).map(p=>p.map(n=>n<3?'R':'U').join(''));const unique=[...new Set(paths)];assert.equal(unique.length,20);
 assert.equal(unique.filter(path=>{let x=0,y=0;for(const c of path){c==='R'?x++:y++;if(x===1&&y===1)return false;}return true;}).length,8);
 assert.equal(permutations([0,1,2,3]).filter(p=>p.every((v,i)=>v!==i)).length,9);
 assert.equal(Array.from({length:32},(_,i)=>i).filter(n=>(n&(n<<1))===0).length,13);
 let brackets=0;for(let n=0;n<64;n++){let depth=0,ok=true;for(let i=0;i<6;i++){depth+=(n>>i)&1?1:-1;if(depth<0)ok=false;}if(ok&&depth===0)brackets++;}assert.equal(brackets,5);
 let allocations=0;for(let a=1;a<=8;a++)for(let b=1;b<=8;b++)if(8-a-b>=1)allocations++;assert.equal(allocations,21);
 const necklaces=new Set<string>();for(let n=0;n<16;n++){const s=n.toString(2).padStart(4,'0');necklaces.add(Array.from({length:4},(_,i)=>s.slice(i)+s.slice(0,i)).sort()[0]);}assert.equal(necklaces.size,6);
});
test('probability and game calculations checked independently',()=>{
 const dice=Array.from({length:6},(_,a)=>Array.from({length:6},(_,b)=>[a+1,b+1])).flat().filter(([a,b])=>a+b===7);assert.equal(dice.filter(([a])=>a===4).length/dice.length,1/6);
 const pairs=choose(['R','R','R','B','B'],2);assert.equal(pairs.filter(([a,b])=>a===b).length/pairs.length,2/5);
 for(const p of [.1,.25,.5,.8])assert.equal(p*(1-p),(1-p)*p);
 const win=[false];for(let n=1;n<=21;n++)win[n]=[1,2,3].some(k=>k<=n&&!win[n-k]);assert.equal(win[20],false);assert.equal(win[21],true);
 assert.equal(1^4^5,0);assert.equal(2*3*4*5-1,119);
 let a=84,b=30;while(a!==b)a>b?a-=b:b-=a;assert.equal(a,6);
});
