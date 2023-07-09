//배열 타입 활용

// 문자열만 가지는 배열
let fruits1: string[] = ['Apple', 'Banana', 'Mango'];
// Or
let fruits2: Array<string> = ['Apple', 'Banana', 'Mango'];

// 숫자만 가지는 배열
let oneToSeven1: number[] = [1, 2, 3, 4, 5, 6, 7];
// Or
let oneToSeven2: Array<number> = [1, 2, 3, 4, 5, 6, 7];

//유니언 타입(다중 타입)의 문자열과 숫자를 동시에 가지는 배열
let array1: (string | number)[] = ['Apple', 1, 2, 'Banana', 'Mango', 3];
// Or
let array2: Array<string | number> = ['Apple', 1, 2, 'Banana', 'Mango', 3];

//애니(any)타입 배열 - 요소들의 값이 지정하지 않아도 되는 배열
let someArr: any[] = [0, 1, {}, [], 'str', false];

console.log(fruits1)
console.log(fruits2)

console.log(oneToSeven1)
console.log(oneToSeven2)

console.log(array1)
console.log(array2)

//npx ts-node ex04.ts