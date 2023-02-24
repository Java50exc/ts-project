// for(let i = 0; i < 3; i++) {
//     setTimeout(()=> console.log(i))
// }
let num: number;
num = 12;
let str: string = "abcd";
str = "lmn";
let color: "red"|"blue"|"green";
color = "red";
function f1(n1: number, n2: number): number {
    return n1 + n2;
}
//f1(1, "1");
function f2(array: number[]): number {
    return array.reduce((res, cur)=> res + cur);
}
function stringNumberAction(strNum: string|number): number {
    let res:number;
    if(typeof strNum == "string"){
        res = strNum.length;
    } else {
        res = strNum * 2;
    }
    return res;
}
console.log(stringNumberAction("10"));
let ar: number[] | string[];
ar = [1, 2, 3];
ar = ["1", "avc", "3"];
let ar1: (number|string)[];
ar1 = [1, "a"];
type Color = "red"|"blue"|"green"|"gray"|"yellow";
let someColor: Color;
type Comparator =( (num1: number, num2: number) => number) | ((ar:number[])=> number);
let someComparator: Comparator;
someComparator = (n1, n2) => n1 - n2;
someComparator = f1;
someComparator = f2;
type Person = {
    id: number;
    name: string;
    age?: number;
}
const person:Person = {id: 123, name: "Vasya"}
//HW #29
function shiftRound(str: string, shift: number): string {
    //TODO
    //shift any positive number
    //adds "shift" to ASCII codes of lower case letters
    //if the shifted code will be greater than ASCII code 'z'
    // the code should be begun from ASCII code 'a'
    //source letter 'a' will be 'c' if "shift" == 2
    //source letter 'z' will be 'b' if shift ==2
    //example: shiftRound("aabx!", 4) => ("eefb!")

    return "";
}
function unshiftRound(str: string, shift: number): string {
    //subtracts "shift" from ASCII codes of lower case letters
    //if the shifted code will be less than ASCII code 'a'
    // the code should be begun from ASCII code 'z'
    //source letter 'c' will be 'a' if "shift" == 2
    //source letter 'b' will be 'z' if shift ==2
    //example: ushiftRound("eefb!", 4) => ("aabx!")
    return "";
}