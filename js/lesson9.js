// Callback functions
// function sayHi(par1) {
// 	return `Welcome, ${par1}`
// }

// console.log(sayHi('Onur'))
// console.log(sayHi)

// Higher order function
// parametre olarak bir fonksiyon alan, yada bir fonksiyon
// function sayGoodbye(par1, par2) {
// 	console.log(par2(par1))
// 	return `Goodbye, ${par1}`
// }

// console.log(sayGoodbye('jane', sayHi))

// function sayGoodbye(par1) {
// 	console.log(par1('John'))
// }

// sayGoodbye(sayHi)

// inline callback function
// sayGoodbye('Jane', function (par1) {
// 	return `welcome, ${par1}`
// })

// for ... each method
// const numbers = [2, 5, 7, 8, 4];

// numbers.forEach(function (number, index) {
// 	console.log('element is: ', number);
// 	console.log('index is: ', index);
// })

// numbers.forEach(function (number) {
// 	console.log('element is: ', number * 2);
// })

// function classicFunctionDeclaration() {
// }

// Arrow functions
// fark1 - tek parametre ise paranteze gerek yok VSC-prettier otomatikman kaldiriyor
// const myArrowFunct = (par1) => {
// 	console.log("Hello");
// };
// myArrowFunct();

// fark 2- eger fonksiyon basit ve tek satir ise suslu paranteze de gerek yok, ve return kelimesi kullanilmaz
// const myArrowFunct1 = (par1) => console.log("Hello");


// const myArr = [2, 5, 7, 8]
// myArr.forEach(asd => {
// 	console.log(asd)
// })

// fark 3 - arrow functionlarda 'argument' keywordu yoktur
// const myArrowFunct = (a, b, c) => a + b + c;
// const myArrowFunct2 = (...args) => {
// 	console.log(args);
// }

// myArrowFunct2('js', 'react')

// pure functions
// same inputs, same outputs
// no side-effects

// function sum(a, b) {
// 	return a + b;
// }

// sum(3, 6)

// function sum(a, b) {
// 	const randomNumber = getRandomNumber()
// 	return randomNumber*(a + b);
// }

// sum(3, 6)

// Array.map()

const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];

const newArray = planets.map((planet) => {
	return planet.toUpperCase();
})
console.log(newArray);

const newArray2 = planets.map((planet) => {
	return planet.toLowerCase();
})
console.log(newArray2);

const newArray3 = planets.map((planet) => planet.toLowerCase())
console.log(newArray3);
