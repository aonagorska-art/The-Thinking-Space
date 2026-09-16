import React,{useEffect,useReducer,useRef,useState} from 'react';
import {createRoot} from 'react-dom/client';
import {puzzles as logicPuzzles} from './content';
import {excelPuzzles} from './content/excel';
import {languages} from './types';
import {names,ui,shelfText,modeText} from './i18n';
import {readSession,storageKey,transition,levels} from './state';
import {MiniSheet,practiceUI} from './excel/MiniSheet';
import {bookmarkKey,readBookmarks,toggleBookmark} from './bookmarks';
import {fresh,type Action,type Session} from './state';
import {usePuzzleTools} from './webmcp';
import './style.css';
function CoverArt({kind,excel=false}:{kind:string;excel?:boolean}){return <svg className="cover-drawing" viewBox="0 0 240 170" fill="none" aria-hidden="true">{excel?<><rect x="34" y="23" width="172" height="123" rx="5"/><path d="M34 53h172M34 84h172M34 115h172M76 23v123M119 23v123M162 23v123"/><path className="solid" d="M77 54h41v29H77zM120 85h41v29h-41zM163 116h41v28h-41z"/></>:kind==='gentle'?<><path d="m66 127 74-88 22 18-74 88-30 9zM66 127l22 18M132 49l22 18M58 154l8-27M77 136l73-88"/><path d="M118 129h61M107 144h72M167 37l11-12M182 52l17-3"/></>:kind==='intermediate'?<><path d="M40 132h40V99h40V66h40V33h40M40 148h56v-33h40V82h40V49h24M56 132v16M96 99v16M136 66v16M176 33v16"/><path d="m61 66 42-42m-27 0h27v27"/></>:<><path d="M43 27h154v118H43V51h124v64H73V81h64M73 51v30M103 115v30M167 81h30M137 27v24"/><path d="m118 73 19 8-19 8"/></>}</svg>}
function App(){
 const [mode,setMode]=useState<'logic'|'excel'>(()=>{try{return localStorage.getItem('thinking-space.mode')==='excel'?'excel':'logic';}catch{return 'logic';}});
 return <PuzzleApp key={mode} mode={mode} changeMode={next=>{try{localStorage.setItem('thinking-space.mode',next);}catch{}setMode(next);}}/>;
}
function PuzzleApp({mode,changeMode}:{mode:'logic'|'excel';changeMode:(mode:'logic'|'excel')=>void}){
 const excel=mode==='excel';const puzzles=excel?excelPuzzles:logicPuzzles;const sessionKey=excel?'thinking-space.excel.v2':storageKey;
 const [initial]=useState(()=>{const result=readSession(puzzles,sessionKey);try{const language=localStorage.getItem('thinking-space.language');if(languages.includes(language as typeof languages[number]))result.session.language=language as typeof languages[number];}catch{}return result;});
 const [session,sessionDispatch]=useReducer(transition,initial.session);
 const [review,setReview]=useState<Session|null>(null),[savedView,setSavedView]=useState(false);
 const [saved,setSaved]=useState(()=>readBookmarks([...logicPuzzles,...excelPuzzles].map(p=>p.id)));
 const s=review??session;
 const dispatch=(action:Action)=>{if(review)setReview(prev=>prev?transition(prev,action):null);else sessionDispatch(action);};
 function back(){setReview(null);if(!review){setSavedView(false);sessionDispatch({type:'shelf'});}}
 function save(id:string){const next=toggleBookmark(saved,id);setSaved(next);try{localStorage.setItem(bookmarkKey,JSON.stringify(next));}catch{setWarning('storage');}}
 function openSaved(id:string){const p=puzzles.find(p=>p.id===id);if(p)setReview({...fresh([p],session.language),order:[p.id],cursor:0,level:p.difficulty,shelf:false});}

 usePuzzleTools(savedView&&!review?{...s,shelf:true}:s,dispatch,puzzles);
 const [warning,setWarning]=useState(initial.warning);
 const heading=useRef<HTMLHeadingElement>(null);
 const lastCursor=useRef(s.cursor);
 const t=ui[s.language];const book=shelfText[s.language];const mt=modeText[s.language];const pt=practiceUI[s.language];
 const current=puzzles.find(p=>p.id===s.order[s.cursor]);
 const c=current?.translations[s.language];
 const exhausted=s.cursor===s.order.length-1;
 useEffect(()=>{document.documentElement.lang=s.language==='zh'?'zh-CN':s.language;document.title="The Thinking Space";},[s.language,t.tagline]);
 useEffect(()=>{try{window.localStorage.setItem(sessionKey,JSON.stringify(session));window.localStorage.setItem('thinking-space.language',s.language);}catch{setWarning('storage');}},[session,s.language,sessionKey]);
 useEffect(()=>{if(!s.shelf){heading.current?.focus();lastCursor.current=s.cursor;}},[s.cursor,s.shelf,s.level]);
 return <div className="shell">
  <a className="skip" href="#thinking-space">{t.skip}</a>
  <header><a className="brand" href="#" onClick={e=>{e.preventDefault();setReview(null);setSavedView(false);sessionDispatch({type:'shelf'});}}>The Thinking<br/>Space<span aria-hidden="true">↗</span></a><nav aria-label={t.language}>{languages.map(l=><button key={l} lang={l} aria-pressed={s.language===l} onClick={()=>{sessionDispatch({type:'language',language:l});if(review)setReview({...review,language:l});}}>{names[l]}</button>)}</nav></header>
  <main id="thinking-space" aria-label={book.choose}>
   {warning&&<p className="notice" role="status">{t[warning]}</p>}
   {savedView&&!review?<section className="saved-library"><button className="back" onClick={()=>setSavedView(false)}>← {pt.close}</button><h1>{pt.list} · {excel?'EXCEL':mt.logic}</h1>{puzzles.filter(p=>saved.includes(p.id)).length===0?<p>{pt.none}</p>:<ul>{puzzles.filter(p=>saved.includes(p.id)).map(p=><li key={p.id}><button className="saved-title" onClick={()=>openSaved(p.id)}><span>{book[p.difficulty]}</span>{p.translations[s.language].title} ↗</button><button className="saved-remove" aria-label={`${pt.remove}: ${p.translations[s.language].title}`} onClick={()=>save(p.id)}>×</button></li>)}</ul>}</section>:s.shelf||!c?<section className="welcome"><div className="shelf-heading"><div className="mode-tabs" role="group" aria-label={mt.select}><button aria-pressed={!excel} onClick={()=>changeMode('logic')}>{mt.logic}</button><button aria-pressed={excel} onClick={()=>changeMode('excel')}>EXCEL</button></div><h1>{excel?mt.excelTitle:book.choose}</h1><button className="saved-link" onClick={()=>setSavedView(true)}>♧ {pt.list}</button>{excel&&<p>{mt.excelIntro}</p>}</div><div className="bookshelf">{levels.map((level)=><button key={level} className={`book-cover ${level}`} onClick={()=>dispatch({type:'select',level,library:puzzles})}><span className="cover-top">{excel?'EXCEL':'The Thinking Space'}</span><strong>{book[level]}</strong><CoverArt kind={level} excel={excel}/><span className="open-label">{excel?mt.open:book.open}<span aria-hidden="true">↗</span></span></button>)}</div></section>:<><button className="back" onClick={back}>← {review?pt.list:book.back}</button><div className={`open-book ${s.level}`}><aside className="left-page" aria-hidden="true"><span className="book-imprint">{excel?'EXCEL':'THE THINKING SPACE'}</span><strong>{s.level&&book[s.level]}</strong><CoverArt kind={s.level??'gentle'} excel={excel}/><p>{book.chapter}</p><span className="page-line"/></aside>
   <article className="puzzle" key={current.id}><div className="puzzle-heading"><span className="bookmark">{s.level&&book[s.level]}</span><button className="save-bookmark" aria-pressed={saved.includes(current.id)} onClick={()=>save(current.id)}><svg viewBox="0 0 16 20" aria-hidden="true"><path d="M2 1h12v17l-6-4-6 4Z"/></svg>{saved.includes(current.id)?pt.saved:pt.save}</button></div><h2 ref={heading} tabIndex={-1}>{c.title}</h2><p className="question">{c.question}</p>{excel&&<MiniSheet key={current.id} id={current.id} language={s.language}/>}
    <div className="help-area"><div className="reveals" aria-live="polite" aria-relevant="additions">{c.hints.slice(0,s.hints).map((hint,i)=><section className="hint-block reveal" key={i}><h3>{t.hintLabel}<span aria-hidden="true">↳</span></h3><p>{hint}</p></section>)}</div>
    <div className="help-actions">{s.hints<c.hints.length?<button className="secondary" onClick={()=>dispatch({type:'hint',limit:c.hints.length})}><span aria-hidden="true">＋</span>{s.hints?t.moreHint:t.hint}</button>:!s.answer&&<p className="quiet">{t.endHints}</p>}{!s.answer&&<button className="text-button" onClick={()=>dispatch({type:'answer'})}>{t.answer}<span aria-hidden="true">↗</span></button>}</div>
    {s.answer&&<section className="answer-block reveal" aria-live="polite"><h3>{t.answerLabel}</h3><p>{c.answer}</p>{!s.explanation&&<button className="text-button" onClick={()=>dispatch({type:'explain'})}>{t.explain}<span aria-hidden="true">↘</span></button>}</section>}
    {s.explanation&&<section className="reason-block reveal" aria-live="polite"><h3>{t.reasonLabel}</h3><ol>{c.explanation.map((step,i)=><li key={i}>{step}</li>)}</ol></section>}</div>
    <div className="next-area">{review?<button className="primary" onClick={()=>setReview(null)}>← {pt.list}</button>:exhausted?<><p>{t.exhausted}</p><button className="primary" onClick={()=>dispatch({type:'reshuffle',library:puzzles})}>{t.reshuffle}<span aria-hidden="true">↻</span></button></>:<button className="primary" onClick={()=>dispatch({type:'next'})}>{excel?mt.next:t.another}<span aria-hidden="true">↗</span></button>}</div>
   </article></div></>}
  </main>
 </div>;
}
createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>);
