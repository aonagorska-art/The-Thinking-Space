export const bookmarkKey='thinking-space.bookmarks.v1';
export function readBookmarks(ids:string[]):string[]{try{const value=JSON.parse(localStorage.getItem(bookmarkKey)??'[]');return Array.isArray(value)?[...new Set(value.filter((v):v is string=>typeof v==='string'&&ids.includes(v)))]:[];}catch{return [];}}
export function toggleBookmark(saved:string[],id:string):string[]{return saved.includes(id)?saved.filter(x=>x!==id):[...saved,id];}
