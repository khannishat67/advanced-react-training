// Number, String, boolean, Objects, null, undefined, functions, any

const a: number = 10;
const b: number = 10.4;
const c: number = 10e6;
console.log(typeof(a), typeof(b), typeof(c));

console.log(a,b,c);

const d: string = "hello";
const e: string = 'world';
const f: string = `This is template
                string that preserves template and can display variables ${d+e}`

console.log(d);
console.log(e);
console.log(f);

const truthy = true;
console.log(typeof(truthy));

const jsonObj: {
    fName: string,
    lName: string,
    age: number,
    somethingElse: boolean
} = {
    fName: 'Nishat',
    lName: 'Khan',
    age: 23,
    somethingElse: true
}
console.log(typeof(jsonObj));
let val1 = null;
let val2 = undefined;
console.log(val1 === val2);

type NumberOrString = number | string;

var numberOrString: NumberOrString = '0';
var numberOrString2: NumberOrString = 2;
var numberOrString3: NumberOrString = true;
