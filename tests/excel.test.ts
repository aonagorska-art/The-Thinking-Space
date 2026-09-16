import {test} from 'node:test';
import assert from 'node:assert/strict';
import {excelPuzzles} from '../src/content/excel';
import {languages} from '../src/types';
import {fresh,levels,transition,validate,readSession,storageKey} from '../src/state';
import {modeText,shelfText} from '../src/i18n';
test('Excel has five complete translated exercises per level',()=>{
 assert.equal(new Set(excelPuzzles.map(p=>p.id)).size,15);
 for(const level of levels)assert.equal(excelPuzzles.filter(p=>p.difficulty===level).length,5);
 for(const p of excelPuzzles)for(const l of languages){const c=p.translations[l];assert.equal(c.hints.length,2);assert.equal(c.explanation.length,2);for(const v of [c.title,c.question,c.answer,...c.hints,...c.explanation])assert.ok(v.trim());}
 for(const l of languages){assert.deepEqual(Object.keys(modeText[l]).sort(),Object.keys(modeText.en).sort());assert.deepEqual(Object.keys(shelfText[l]).sort(),Object.keys(shelfText.en).sort());}
});
test('Excel decks remain independent and retain answers across level changes',()=>{
 let s=transition(fresh(excelPuzzles),{type:'select',level:'gentle',library:excelPuzzles});const id=s.order[s.cursor];s=transition(s,{type:'answer'});
 s=transition(s,{type:'select',level:'challenging',library:excelPuzzles});assert.equal(s.answer,false);
 s=transition(s,{type:'select',level:'gentle',library:excelPuzzles});assert.equal(s.answer,true);assert.equal(s.order[s.cursor],id);assert.deepEqual(validate(s,excelPuzzles),s);
});
test('Excel reads only its own storage and never migrates the logic collection',()=>{
 const prev=Object.getOwnPropertyDescriptor(globalThis,'window');const keys:string[]=[];
 try{Object.defineProperty(globalThis,'window',{configurable:true,value:{localStorage:{getItem:(key:string)=>{keys.push(key);assert.notEqual(key,storageKey);return null;}}}});assert.equal(readSession(excelPuzzles,'thinking-space.excel.v2').warning,null);assert.deepEqual(keys,['thinking-space.excel.v2']);}
 finally{if(prev)Object.defineProperty(globalThis,'window',prev);else Reflect.deleteProperty(globalThis,'window');}
});
test('exercise result arithmetic checked independently',()=>{
 const weighted=[60,80,100].reduce((sum,n,i)=>sum+n*[1,2,7][i],0)/10;assert.equal(weighted,92);
 const orders=[['East','Paid',100],['West','Paid',80],['East','Open',50],['East','Paid',20]];assert.equal(orders.filter(r=>r[0]==='East'&&r[1]==='Paid').reduce((n,r)=>n+Number(r[2]),0),120);
 const names=['Ben','Ada','Ben','Cara','Ada','Dan'],paid=['Paid','Open','Paid','Paid','Paid','Open'];assert.deepEqual([...new Set(names.filter((n,i)=>n&&paid[i]==='Paid'))].sort(),['Ada','Ben','Cara']);
 for(const l of languages)assert.match(excelPuzzles.find(p=>p.id==='excel-weighted')!.translations[l].answer,/92/);
});
