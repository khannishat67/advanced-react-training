// Number, String, boolean, Objects, null, undefined, functions
var a = 10;
var b = 10.4;
var c = 10e6;
console.log(typeof (a), typeof (b), typeof (c));
console.log(a, b, c);
var d = "hello";
var e = 'world';
var f = "This is template\n                string that preserves template and can display variables " + (d + e);
console.log(d);
console.log(e);
console.log(f);
var truthy = true;
console.log(typeof (truthy));
var jsonObj = {
    fName: 'Nishat',
    lName: 'Khan',
    age: 23,
    somethingElse: true
};
console.log(typeof (jsonObj));
var val1 = null;
var val2 = undefined;
console.log(val1 === val2);
