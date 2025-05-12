// const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];

// for (let i = 0; i < planets.length; i++) {
//     console.log(planets[i]);
// }

// console.log(planets.includes('Earth'))

// for ... of loop u
// for (const planet of planets) {
//     console.log(planet);
// }

// functions
// arguments pseudo array
// function multiply() {
//     let total = 1;
//     for (const arg of arguments) {
//         total *= arg;
//     }
//     return total;
// }

// console.log(multiply(1, 2, 3));
// console.log(multiply(1, 2, 3, 4));
// console.log(multiply(1, 2, 3, 4, 5));

// function multiply2() {
//     console.log(arguments);
//     console.log(arguments[0]);
// }

// multiply2(1, 2, 3);
// multiply2(1, 2, 3, 4);
// multiply2(1, 2, 3, 4, 5);

// function greet(username = 'Guest') {
//     console.log(`Hello, ${username}!`);
// }

// greet('John');

// function greet2(username = 'firstname', lastname = 'surname') {
//     console.log(`Hello, ${username} ${lastname} !`);
// }

// greet2('John');


// function multiply() {
//     console.log(arguments.length);
// }

// // function expression
// // right side anonymous function
// const multiply2 = function () { // do not need to give name this function
// // const asd = function multiply2() {
//     console.log(arguments[0]);
// };

// multiply('hello');
// multiply2('hello');

// hoisting
// Scope

// const globalValue = 10;
// console.log(globalValue);

// function foo() {
//     console.log('foo is: ', globalValue);
// }

// for (let i = 0; i < 5; i++) {
//     console.log('for is: ', globalValue);
// }

// function fnA() {
//     console.log('log inside fnA');
//     fnB();
//     console.log('log inside fnA after fnB');
// }

// function fnB() {
//     console.log('log inside fnB');
// }

// console.log('log outside fnA before fnA()');
// fnA();
// console.log('log outside fnA after fnA()');

// function bar() {
//     console.log('bar');
// }

// function baz() {
//     console.log('baz');
// }

// function foo() {
//     console.log('foo');
//     bar();
//     baz();
//     console.log('finished');
// }

// foo();

