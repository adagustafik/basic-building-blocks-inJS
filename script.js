for (let i = 0; i<=9; i++) {
    console.log (i)
    }

for (let i = 1; i<=10; i++) {
    console.log (i)
    }

for (let i = 0; i<=20; i++) {
    if (i % 2 == 0) {
        console.log (i)
}}

console.log ("FUNCTION")
let printNumbersTill = x => {
    for (let i = 1; i<=x; i++) {
        console.log (i);
}}
printNumbersTill (20);
printNumbersTill (15);

let getGreetingTo = (name) => {
    return ('Hello ' + name + "!");
}
console.log(getGreetingTo('Mark'));
getGreetingTo('Mark');
 
/*
let printValues = (values) => {
    for (let i=0; i< values.length; i++) {
        console.log(values[i]);
}};
printValues ([0, 3, 6, 7, 9]); 
*/

let printValues = [0, 3, 6, 7, 9];

printValues.forEach ((number) => {
    console.log (number);
});