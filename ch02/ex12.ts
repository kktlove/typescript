//Object - 객체 : 컴파일러 옵션에서 엄격한 타입 검사(strict)를 true로 설정하게 되면, null은 허용되지 않음
let obj: object = {};   //일반 객체
let arr: object = [];   //배열 객체
let func: object = function () {};  //함수 객체
let nullValue: object = null; //Null 객체
let date: object = new Date(); //날짜 객체

//타입을 개별적으로 지정하는 경우
let userA: { name: string, age: number } = {
    name: 'KIMKITAE',
    age: 31
};
  
let userB: { name: string, age: number } = {
    name: 'KIMGITAE',
    //age: false, // Error - 선언된 타입과 다름
    age: 27,
    //email: 'thesecon@gmail.com' // Error - 선언되지 않았음
};

//반복적으로 사용할 경우 인터페이스를 선언하여 활용
interface User {
    name: string,
    age: number
}

let userC: User = {
    name: 'KIMYOEN',
    age: 32
};

let userD: User = {
    name: 'KINGKIM',
    age: 19
};

console.log(userA)
console.log(userB)
console.log(userC)
console.log(userD)

//npx ts-node ex12.ts