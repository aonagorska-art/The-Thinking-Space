import {test} from 'node:test';
import assert from 'node:assert/strict';
import {puzzles} from '../src/content';
import {languages} from '../src/types';
import {ui} from '../src/i18n';
test('100 distinct complete records in four languages and ten balanced categories',()=>{
 assert.ok(puzzles.length>=100);
 assert.equal(new Set(puzzles.map(p=>p.id)).size,puzzles.length);
 assert.equal(new Set(puzzles.map(p=>p.translations.en.question)).size,puzzles.length);
 const categories=new Map<string,number>();
 for(const p of puzzles){
  categories.set(p.category,(categories.get(p.category)??0)+1);
  for(const lang of languages){
   const c=p.translations[lang];assert.ok(c,`${p.id}/${lang}`);
   assert.ok(c.hints.length>=2);assert.equal(new Set(c.hints).size,c.hints.length);
   assert.ok(c.explanation.length>=2);
   for(const value of [c.title,c.question,c.answer,...c.hints,...c.explanation]){
    assert.ok(value.trim().length>0,`${p.id}/${lang}: empty field`);
    assert.doesNotMatch(value,/TODO|placeholder|lorem ipsum/i);
   }
   assert.equal(c.hints.length,p.translations.en.hints.length);
   if(lang!=='en') assert.notEqual(c.question,p.translations.en.question);
  }
 }
 assert.equal(categories.size,10);assert.ok([...categories.values()].every(n=>n>=10));
});
test('interface keys complete in every language',()=>{
 for(const lang of languages)assert.deepEqual(Object.keys(ui[lang]).sort(),Object.keys(ui.en).sort());
});
test('horse puzzle keeps required assumptions and answer',()=>{
 const p=puzzles.find(p=>p.id==='horses')!;
 assert.match(p.translations.en.question,/25 horses.*fixed, distinct.*consistently/);
 for(const lang of languages)assert.match(p.translations[lang].answer,/7/);
});
