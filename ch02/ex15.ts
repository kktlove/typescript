//유니언(Union) : 2개 이상의 타입을 허용하는 타입 - |(vertical bar)로 타입을 구분
let union: (string | number);
union = 'Hello type!';
union = 123;
//union = false; // Error - TS2322: Type 'false' is not assignable to type 'string | number'.


//인터섹션(Intersection) : 2개 이상의 타입을 조합하는 타입 - &(ampersand)를 사용해 2개 이상의 타입을 조합
// 기존 타입들이 조합 가능하다면 인터섹션을 활용할 수 있습니다.
interface BUser {
  name: string,
  age: number
}
interface FValidation {
  isValid: boolean
}
const lee: BUser = {
  name: 'LEE',
  age: 36,
  //isValid: true // Error -  TS2322: Type '{ name: string; age: number; isValid: boolean; }' is not assignable to type 'IUser'.
};
const park: BUser & FValidation = {
  name: 'PARK',
  age: 85,
  isValid: true
};

// 혹은 기존 타입(IUser, IValidation)과 비슷하지만, 정확히 일치하는 타입이 없다면 새로운 타입을 생성해야 합니다.
interface BUserNew {
  name: string,
  age: number,
  isValid: boolean
}
const kim: BUserNew = {
  name: 'KIM',
  age: 36,
  isValid: false
};

console.log(lee)
console.log(park)
console.log(kim)

//npx ts-node ex15.ts