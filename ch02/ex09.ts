//열거형
enum Week {  Sun,  Mon,  Tue,  Wed,  Thu,  Fri,  Sat }

console.log(Week);
console.log(Week.Sun); // 0
console.log(Week['Sun']); // 0
console.log(Week[0]); // 'Sun'
console.log(Week.Mon)

enum Color {
    Red = 'red',
    Green = 'green',
    Blue = 'blue'
}
console.log(Color.Red); // red
console.log(Color['Green']); // green

//npx ts-node ex09.ts
