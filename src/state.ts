import {languages, type Language, type Puzzle} from './types';
export type Deck = {version:1; language:Language; order:string[]; cursor:number; hints:number; answer:boolean; explanation:boolean};
export type Level = Puzzle['difficulty'];
export const levels:Level[]=['gentle','intermediate','challenging'];
export type Session = Deck & {level:Level|null;shelf:boolean;decks:Partial<Record<Level,Deck>>};
export const storageKey = 'thinking-space.session.v2';
export function shuffle(ids: string[], random = Math.random): string[] {
  const result = [...ids];
  for(let i=result.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[result[i],result[j]]=[result[j],result[i]];}
  return result;
}
function freshDeck(library: Puzzle[], language:Language='en'):Deck {return {version:1,language,order:shuffle(library.map(p=>p.id)),cursor:-1,hints:0,answer:false,explanation:false};}
function validateDeck(value:unknown, library:Puzzle[]):Deck {
  if(!value || typeof value!=='object') throw Error('Invalid session');
  const s=value as Deck; const ids=new Set(library.map(p=>p.id));
  if(s.version!==1 || !languages.includes(s.language) || !Array.isArray(s.order) || s.order.length>ids.size || new Set(s.order).size!==s.order.length || !s.order.every(id=>ids.has(id)) || !Number.isInteger(s.cursor) || s.cursor < -1 || s.cursor>=s.order.length || !Number.isInteger(s.hints) || s.hints<0 || typeof s.answer!=='boolean' || typeof s.explanation!=='boolean' || (s.explanation&&!s.answer)) throw Error('Invalid session');
  const current=library.find(p=>p.id===s.order[s.cursor]);
  if(s.hints>(current?.translations.en.hints.length??0) || (!current&&(s.answer||s.explanation))) throw Error('Invalid reveal state');
  return {version:1,language:s.language,order:[...s.order,...shuffle([...ids].filter(id=>!s.order.includes(id)))],cursor:s.cursor,hints:s.hints,answer:s.answer,explanation:s.explanation};
}
export function fresh(library:Puzzle[],language:Language='en'):Session {return {...freshDeck(library,language),level:null,shelf:true,decks:{}};}
export function validate(value:unknown,library:Puzzle[]):Session {
 const v=value as Session;
 if(!v || typeof v!=='object' || (v.level!==null&&!levels.includes(v.level)) || typeof v.shelf!=='boolean' || !v.decks || typeof v.decks!=='object')throw Error('Invalid session');
 const deck=validateDeck(v,v.level?library.filter(p=>p.difficulty===v.level):library);
 const decks:Session['decks']={};
 for(const l of levels)if(v.decks[l])decks[l]=validateDeck(v.decks[l],library.filter(p=>p.difficulty===l));
 return {...deck,level:v.level,shelf:v.shelf,decks};
}
export function readSession(library:Puzzle[],key=storageKey):{session:Session;warning:'storage'|'recovered'|null} {
 try{
  const raw=window.localStorage.getItem(key);
  if(raw)return {session:validate(JSON.parse(raw),library),warning:null};
  const old=key===storageKey?window.localStorage.getItem('thinking-space.session.v1'):null;
  if(old){
   const v=JSON.parse(old);const oldLibrary=library.filter(p=>Array.isArray(v.order)&&v.order.includes(p.id));
   const d=validateDeck(v,oldLibrary);const session=fresh(library,d.language);
   for(const level of levels){
    const pool=library.filter(p=>p.difficulty===level);
    const seen=d.order.slice(0,d.cursor+1).filter(id=>pool.some(p=>p.id===id));
    const deck=freshDeck(pool,d.language);deck.order=[...seen,...shuffle(pool.map(p=>p.id).filter(id=>!seen.includes(id)))];deck.cursor=seen.length-1;
    if(seen.at(-1)===d.order[d.cursor])Object.assign(deck,{hints:d.hints,answer:d.answer,explanation:d.explanation});
    session.decks[level]=deck;
   }
   return {session,warning:null};
  }
  return {session:fresh(library),warning:null};
 }catch(error){return {session:fresh(library),warning:error instanceof SyntaxError||error instanceof Error&&error.message.startsWith('Invalid')?'recovered':'storage'};}
}
export type Action = {type:'select';level:Level;library:Puzzle[]}|{type:'shelf'}| {type:'language';language:Language}|{type:'next'}|{type:'hint';limit:number}|{type:'answer'}|{type:'explain'}|{type:'reshuffle';library:Puzzle[]};
export function transition(s:Session,a:Action):Session {
  switch(a.type){
    case 'shelf':return {...s,shelf:true};
    case 'select':{const decks={...s.decks,...(s.level?{[s.level]:{version:s.version,language:s.language,order:s.order,cursor:s.cursor,hints:s.hints,answer:s.answer,explanation:s.explanation}}:{})};const d=decks[a.level]??freshDeck(a.library.filter(p=>p.difficulty===a.level),s.language);return {...d,language:s.language,cursor:Math.max(0,d.cursor),level:a.level,shelf:false,decks};}
    case 'language':return {...s,language:a.language};
    case 'next':return s.cursor+1>=s.order.length?s:{...s,cursor:s.cursor+1,hints:0,answer:false,explanation:false};
    case 'hint':return s.cursor<0?s:{...s,hints:Math.min(s.hints+1,a.limit)};
    case 'answer':return s.cursor<0?s:{...s,answer:true};
    case 'explain':return s.answer?{...s,explanation:true}:s;
    case 'reshuffle':return s.cursor===s.order.length-1?{...s,...freshDeck(a.library.filter(p=>!s.level||p.difficulty===s.level),s.language),cursor:0}:s;
  }
}
