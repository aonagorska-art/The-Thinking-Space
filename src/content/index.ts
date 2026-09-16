import {newPuzzles} from './new-puzzles';
import {deduction} from './deduction';
import {ordering} from './ordering';
import {weighing} from './weighing';
import {truth} from './truth';
import {constraints} from './constraints';
import {scheduling} from './scheduling';
import {probability} from './probability';
import {combinatorics} from './combinatorics';
import {invariants} from './invariants';
import {lateral} from './lateral';
const original = [...deduction,...ordering,...weighing,...truth,...constraints,...scheduling,...probability,...combinatorics,...invariants,...lateral];

export const puzzles = [...original.map(p=>({...p,difficulty:(p.id==='horses'||p.difficulty==='gentle'?'intermediate':p.difficulty) as typeof p.difficulty})),...newPuzzles];
