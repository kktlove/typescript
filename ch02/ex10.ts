//Any 타입 : 외부에서 들어오는 데이터가 어떤 타입인지 그 타입을 단언할 수 없는 경우, 활용
let anyType: any = 123
anyType = 'Hello world'       //문자열(String)
anyType = {}       //객체(Object)
anyType = null     //Null
anyType = 123.456  //실수(Float)

const listData: any[] = [1, true, 'Anything!']

console.log(anyType)
console.log(listData)

//npx ts-node ex10.ts
