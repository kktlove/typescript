//튜플 타입
let tuple: [string, number];
tuple = ['a', 1];
//tuple = ['a', 1, 2]; // Error - TS2322
//tuple = [1, 'a']; // Error - TS2322

// Variables
let userId: number = 1234;
let userName: string = 'HEROPY';
let isValid: boolean = true;

// Tuple
let user: [number, string, boolean] = [1234, 'HEROPY', true];

console.log(tuple)
console.log(user[0]); // 1234
console.log(user[1]); // 'HEROPY'
console.log(user[2]); // true

//npx ts-node ex07.ts