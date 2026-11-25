export const username: string = "Alice";
export const scores: number[] = [10, 20, 30];
export const add = (a: number, b: number): number => a + b;
export interface User { name: string; age: number; }
export const greet = (user: User): string => `Hello ${user.name}, you are ${user.age}`;
