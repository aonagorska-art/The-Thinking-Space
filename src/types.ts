export const languages = ['en', 'pl', 'ru', 'zh'] as const;
export type Language = typeof languages[number];
export type Content = {title: string; question: string; hints: [string, string, ...string[]]; answer: string; explanation: string[]};
export type Category = 'deduction' | 'ordering' | 'weighing' | 'truth' | 'constraints' | 'scheduling' | 'probability' | 'combinatorics' | 'invariants' | 'lateral';
export type Puzzle = {id: string; category: Category; difficulty: 'gentle' | 'intermediate' | 'challenging'; translations: Record<Language, Content>};
