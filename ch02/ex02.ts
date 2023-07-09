//기본 데이터 타입 활용

let num: number;
let integer: number = 6;   //정ㅅ 초기화
let float: number = 3.14;  //실수 초기화
let hex: number = 0xf00d; // 61453 - 16진수 정수 초기화
let binary: number = 0b1010; // 10 - 2진수 정수 초기화
let octal: number = 0o744; // 484 - 8진수 정수 초기화
let infinity: number = Infinity;
let nan: number = NaN;

console.log("10진 정수 : "+integer)
console.log("2진 정수 : "+binary)
console.log("8진 정수 : "+octal)
console.log("16진 정수 : "+hex)
console.log("실수 : "+float)

//npx ts-node ex02.ts