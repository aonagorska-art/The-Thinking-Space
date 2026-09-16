import {test} from 'node:test';
import assert from 'node:assert/strict';
import {puzzles} from '../src/content';
import {fresh,transition,validate,readSession,levels} from '../src/state';
test('each level exhausts independently and resumes reveals without repeats',()=>{
 let s=fresh(puzzles);
 for(const level of levels){
  s=transition(s,{type:'select',level,library:puzzles});
  const ids=new Set<string>();
  do{ids.add(s.order[s.cursor]);if(s.cursor===s.order.length-1)break;s=transition(s,{type:'next'});}while(true);
  assert.equal(ids.size,puzzles.filter(p=>p.difficulty===level).length);
  s=transition(s,{type:'answer'});s=transition(s,{type:'explain'});
  s=validate(JSON.parse(JSON.stringify(s)),puzzles);
 }
 for(const level of levels){s=transition(s,{type:'select',level,library:puzzles});assert.equal(s.cursor,s.order.length-1);assert.equal(s.explanation,true);}
 const old=s.order;s=transition(s,{type:'reshuffle',library:puzzles});assert.equal(s.cursor,0);assert.equal(s.answer,false);assert.deepEqual([...s.order].sort(),[...old].sort());
});
test('legacy migration preserves consumed puzzles and the current reveal',()=>{
 const oldLibrary=puzzles.filter(p=>!['your-name','wet-towel','growing-hole','paper-world','echo-voice','broken-promise','eggs-tower','stream-sample'].includes(p.id));
 const order=oldLibrary.map(p=>p.id);const old={version:1,language:'pl',order,cursor:3,hints:1,answer:true,explanation:true};
 const prev=Object.getOwnPropertyDescriptor(globalThis,'window');
 try{Object.defineProperty(globalThis,'window',{configurable:true,value:{localStorage:{getItem:(key:string)=>key.endsWith('v1')?JSON.stringify(old):null}}});
 let s=readSession(puzzles).session;const level=puzzles.find(p=>p.id===order[3])!.difficulty;s=transition(s,{type:'select',level,library:puzzles});assert.equal(s.order[s.cursor],order[3]);assert.equal(s.explanation,true);assert.equal(s.language,'pl');assert.deepEqual(validate(s,puzzles),s);
 }finally{if(prev)Object.defineProperty(globalThis,'window',prev);else Reflect.deleteProperty(globalThis,'window');}
});
test('easy pool contains short riddles and horses is medium',()=>{assert.ok(puzzles.filter(p=>p.difficulty==='gentle').every(p=>p.category==='lateral'));assert.equal(puzzles.find(p=>p.id==='horses')!.difficulty,'intermediate');});
test('two-object strategy covers every threshold within 14 drops',()=>{
 for(let f=0;f<=100;f++){let low=0,step=14,count=0,found=100;while(low<100){const next=Math.min(100,low+step);count++;if(next>f){found=low;for(let k=low+1;k<next;k++){count++;if(k>f)break;found=k;}break;}low=next;step--; }assert.equal(found,f);assert.ok(count<=14);}
 assert.ok(13*14/2<100);
});
test('reservoir probabilities stay uniform after every insertion',()=>{let probs=[1];for(let n=2;n<=100;n++){probs=probs.map(p=>p*(n-1)/n);probs.push(1/n);assert.ok(probs.every(p=>Math.abs(p-1/n)<1e-12));}});
