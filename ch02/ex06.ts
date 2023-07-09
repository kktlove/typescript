
//읽기 전용
let arrA: readonly number[] = [1, 2, 3, 4];
let arrB: ReadonlyArray<number> = [0, 9, 8, 7];

//arrA[0] = 123; // Error - TS2542: Index signature in type 'readonly number[]' only permits reading.
//arrA.push(123); // Error - TS2339: Property 'push' does not exist on type 'readonly number[]'.

//arrB[0] = 123; // Error - TS2542: Index signature in type 'readonly number[]' only permits reading.
//arrB.push(123); // Error - TS2339: Property 'push' does not exist on type 'readonly number[]'.

console.log(arrA)
console.log(arrB)

//npx ts-node ex06.ts