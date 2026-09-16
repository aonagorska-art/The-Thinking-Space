import {useEffect,useRef,type Dispatch} from 'react';
import {flushSync} from 'react-dom';
import type {Puzzle} from './types';
import type {Action,Session} from './state';
type Tool={name:string;description:string;inputSchema:object;annotations:{readOnlyHint:boolean;untrustedContentHint:boolean};execute:(input:unknown)=>unknown};
type ModelContext={registerTool:(tool:Tool,options:{signal:AbortSignal})=>void|Promise<void>};
export function usePuzzleTools(state:Session,dispatch:Dispatch<Action>,puzzles:Puzzle[]){
 const latest=useRef(state);latest.current=state;
 useEffect(()=>{
  const context=(document as Document & {modelContext?:ModelContext}).modelContext;
  if(!context?.registerTool)return;
  const lifecycle=new AbortController();
  const snapshot=()=>{
   const s=latest.current,c=puzzles.find(p=>p.id===s.order[s.cursor])?.translations[s.language];
   return {language:s.language,puzzle:!s.shelf&&c?{title:c.title,question:c.question,hints:c.hints.slice(0,s.hints),...(s.answer?{answer:c.answer}:{}),...(s.explanation?{explanation:c.explanation}:{})}:null};
  };
  const tools:Tool[]=[{
   name:'read_thinking_space',description:'Read the current puzzle and only the help already visible on the page.',
   inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:true,untrustedContentHint:false},
   execute(input){if(!input||typeof input!=='object'||Object.keys(input).length)throw Error('Expected an empty object');return snapshot();}
  },{
   name:'advance_thinking_space',description:'Draw the next puzzle or explicitly reveal a hint, answer, or reasoning. Drawing resets revealed help. Does not reshuffle an exhausted collection.',
   inputSchema:{type:'object',properties:{action:{type:'string',enum:['next','hint','answer','explanation']}},required:['action'],additionalProperties:false},annotations:{readOnlyHint:false,untrustedContentHint:false},
   execute(input){
    if(!input||typeof input!=='object'||Object.keys(input).length!==1||!('action' in input))throw Error('Expected exactly one action');
    const s=latest.current;if(s.shelf)throw Error('Choose a difficulty on the bookshelf first');const c=puzzles.find(p=>p.id===s.order[s.cursor])?.translations[s.language];
    let action:Action;
    switch(input.action){
     case 'next':if(s.cursor===s.order.length-1)throw Error('Collection exhausted; use the explicit reshuffle button');action={type:'next'};break;
     case 'hint':if(!c||s.hints>=c.hints.length)throw Error('No hint available');action={type:'hint',limit:c.hints.length};break;
     case 'answer':if(!c)throw Error('Draw a puzzle first');action={type:'answer'};break;
     case 'explanation':if(!s.answer)throw Error('Reveal the answer first');action={type:'explain'};break;
     default:throw Error('Unknown action');
    }
    flushSync(()=>dispatch(action));return snapshot();
   }
  }];
  for(const tool of tools){try{void Promise.resolve(context.registerTool(tool,{signal:lifecycle.signal})).catch(()=>{});}catch{/* Optional browser support must never block the puzzle UI. */}}
  return ()=>lifecycle.abort();
 },[dispatch,puzzles]);
}
