let users: [number, string, boolean][];
// Or
// let users: Array<[number, string, boolean]>;

users = [[1, 'Neo', true], [2, 'Evan', false], [3, 'Lewis', true]];

let tuple1: [1, number];
tuple1 = [1, 2];
tuple1 = [1, 3];
//tuple = [2, 3]; // Error - TS2322: Type '2' is not assignable to type '1'.

let tuple2: [string, number];
tuple2 = ['a', 1];
tuple2 = ['b', 2];
tuple2.push(3);
console.log(tuple); // ['b', 2, 3];
//tuple2.push(true); // Error - TS2345: Argument of type 'true' is not assignable to parameter of type 'string | number'.

let a: readonly [string, number] = ['Hello', 123];
//a[0] = 'World'; // Error - TS2540: Cannot assign to '0' because it is a read-only property.

//npx ts-node ex08.ts