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
// f1(1, "1");
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


const ALPH_LEN: number = 26;
const CODE_A: number = 97;

function shiftRound(str: string, shift: number): string {
    return shiftString(str, (n => (n + shift) % ALPH_LEN));
}

function unshiftRound(str: string, shift: number): string {
    return shiftString(str, (n => ALPH_LEN - 1 -((shift + ALPH_LEN - 1 - n) % ALPH_LEN)));
}

function shiftString(str: string, fn: (c: number) => number): string {
    return Array.from(str)
        .map(c => c >= 'a' && c <= 'z' ? String.fromCharCode(fn(c.charCodeAt(0) - CODE_A) + CODE_A) : c)
        .join('');
}

console.log(unshiftRound('abc', 1))