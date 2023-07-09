//함수의 기본적인 타입 선언

//자바스크립트와 같이 타입을 암묵적 또는 생략하는 경우 
function fnc1(a, b) {
    console.log(a+b);
}

//매개변수 타입과 리턴(반환) 타입을 명시하는 경우
function fnc2(a: number, b: number): void {
    console.log(a+b);
}

fnc1(10, 20)
fnc2(30, 40)

//npx ts-node ex16.ts