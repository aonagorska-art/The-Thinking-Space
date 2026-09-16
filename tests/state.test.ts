import {test} from 'node:test';
import assert from 'node:assert/strict';
import {puzzles} from '../src/content';
import {fresh,transition,validate,shuffle,readSession,storageKey,type Session} from '../src/state';
test('draws never repeat before exhaustion; order and progress survive serialization',()=>{
 let s=fresh(puzzles);const drawn=new Set<string>();
 assert.equal(s.language,'en');assert.equal(s.cursor,-1);
 for(let i=0;i<puzzles.length;i++){
  s=transition(s,{type:'next'});assert.ok(!drawn.has(s.order[s.cursor]));drawn.add(s.order[s.cursor]);
  s=validate(JSON.parse(JSON.stringify(s)),puzzles);
 }
 assert.equal(drawn.size,puzzles.length);assert.deepEqual(transition(s,{type:'next'}),s);
 const again=transition(s,{type:'reshuffle',library:puzzles});
 assert.equal(again.cursor,0);assert.equal(new Set(again.order).size,puzzles.length);
});
test('language switching preserves current puzzle and all reveals',()=>{
 let s=transition(fresh(puzzles),{type:'next'});
 s=transition(s,{type:'hint',limit:2});s=transition(s,{type:'answer'});s=transition(s,{type:'explain'});
 for(const language of ['pl','ru','zh','en'] as const){
  const next=transition(s,{type:'language',language});
  assert.deepEqual({...next,language:s.language},s);
  assert.deepEqual(validate(JSON.parse(JSON.stringify(next)),puzzles),next);s=next;
 }
});
test('progressive hints, independent answer, gated explanation, reset on next',()=>{
 const start=transition(fresh(puzzles),{type:'next'});
 assert.deepEqual(transition(start,{type:'explain'}),start);
 const answer=transition(start,{type:'answer'});assert.equal(answer.hints,0);assert.equal(answer.explanation,false);
 let s=transition(answer,{type:'explain'});assert.equal(s.explanation,true);
 s=transition(s,{type:'hint',limit:2});assert.equal(s.hints,1);
 s=transition(s,{type:'hint',limit:2});assert.equal(s.hints,2);
 s=transition(s,{type:'hint',limit:2});assert.equal(s.hints,2);
 s=transition(s,{type:'next'});assert.equal(s.hints,0);assert.equal(s.answer,false);assert.equal(s.explanation,false);
 assert.deepEqual(transition(start,{type:'reshuffle',library:puzzles}),start);
});
test('rejects malformed storage, duplicate history, invalid reveals and invalid locale',()=>{
 const good=fresh(puzzles);
 for(const bad of [null,{},[],{...good,language:'xx'},{...good,cursor:1000},{...good,order:good.order.map(()=>good.order[0])},{...good,hints:9},{...good,explanation:true},{...good,answer:true}])assert.throws(()=>validate(bad,puzzles));
});
test('unavailable or corrupted local storage degrades gracefully',()=>{
 const previous=Object.getOwnPropertyDescriptor(globalThis,'window');
 try{
  Object.defineProperty(globalThis,'window',{configurable:true,value:{get localStorage(){throw Error('blocked');}}});
  assert.equal(readSession(puzzles).warning,'storage');
  Object.defineProperty(globalThis,'window',{configurable:true,value:{localStorage:{getItem:()=>'{broken'}}});
  assert.equal(readSession(puzzles).warning,'recovered');
  const session=transition(fresh(puzzles),{type:'next'});
  Object.defineProperty(globalThis,'window',{configurable:true,value:{localStorage:{getItem:(key:string)=>{assert.equal(key,storageKey);return JSON.stringify(session);}}}});
  assert.deepEqual(readSession(puzzles),{session,warning:null});
 }finally{if(previous)Object.defineProperty(globalThis,'window',previous);else Reflect.deleteProperty(globalThis,'window');}
});
test('Fisher–Yates preserves its input and can produce all permutations for three items',()=>{
 const original=['a','b','c'];const outputs=new Set<string>();
 for(let i=0;i<3;i++)for(let j=0;j<2;j++){let k=0;const values=[(i+.1)/3,(j+.1)/2];outputs.add(shuffle(original,()=>values[k++]).join(''));}
 assert.equal(outputs.size,6);assert.deepEqual(original,['a','b','c']);
});
