//Null과 Undefined : 모든 타입의 하위 타입으로, 다음과 같이 각 타입에 할당할 수 있음
let num1: number = undefined;
let str1: string = null;
let obj1: { a: 1, b: false } = undefined;
let arr1: any[] = null;
let und1: undefined = null;
let nul1: null = undefined;
let voi1: void = null;
let voi2: void = undefined;

console.log(num1)
console.log(str1)
console.log(obj1)
console.log(arr1)

//npx ts-node ex13.ts