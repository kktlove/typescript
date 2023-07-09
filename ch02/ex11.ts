//Unknown : 알 수 없는 타입 - 어떤 타입의 값도 할당할 수 있지만, Unknown을 다른 타입에는 할당할 수 없음

let a: any = 123;
let u: unknown = 123;

let v1: boolean = a; // 모든 타입(any)은 어디든 할당할 수 있음
let v2: number = u; // 알 수 없는 타입(unknown)은 모든 타입(any)을 제외한 다른 타입에 할당할 수 없음
let v3: any = u; // OK!
let v4: number = u as number; // 타입을 단언하면 할당할 수 있음

//다양한 타입을 반환할 수 있는 API에서 유용할 수 있지만, 
//아래와 같이 Unknown 보단 좀 더 명확한 타입을 사용하는 것이 좋음
interface AUser {
    name: string,
    age: number,
    isValid: boolean
  }

type Result = {
    success: true,
    value: unknown
  } | {
    success: false,
    error: Error
  }
  
  export default function getItems(id: AUser): Result {
    if (id.isValid) {
      return {
        success: true,
        value: ['Apple', 'Banana']
      };
    } else {
      return {
        success: false,
        error: new Error('Invalid user.')
      }
    }
  }

//npx ts-node ex11.ts