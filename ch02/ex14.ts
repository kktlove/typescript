//Void : 값을 반환하지 않는 함수에서 사용
function hello(msg: string): void {
    console.log(`Hello ${msg}`);
  }
  const hi: void = hello('world'); // Hello world
  console.log(hi); // undefined
  //위 구문의 실제 반환되는 값은 undefined 이다.


//Never : 절대 발생하지 않을 값을 나타냄
function error(message: string): never {
    throw new Error(message);
  }

//  const never: [] = [];
//  never.push(3); // Error - TS2345: Argument of type '3' is not assignable to parameter of type 'never'.

//npx ts-node ex14.ts

