// Primitive Variables (Basic)

const lesson = "JavaScript"; // string value - unchangeable

const lessonNumber = 2;  // number value - unchangeable

const isOpen = true; // Boolean value
const isOpen2 = false; // Boolean value

const value = null; // null variable  => object

let lesson2 = 'Functions'; // string value - changeable

let lesson3; // undefined variable

console.log(lesson);
console.log(typeof lesson);

console.log(lessonNumber);
console.log(typeof lessonNumber);

console.log(isOpen);
console.log(typeof isOpen);

console.log(isOpen2);
console.log(typeof isOpen2);

console.log(value);
console.log(typeof value);

console.log(lesson2);
console.log(typeof lesson2);

console.log(lesson3);
console.log(typeof lesson3);

// Second part

const number1 = 23;
const number2 = 7;

const sum = number1 + number2;
const substraction = number1 - number2;
const multiply = number1 * number2;
const division = number1 / number2;
const modulo = number1 % number2;
const power = number1 ** number2;

console.log(sum);
console.log(substraction);
console.log(multiply);
console.log(division);
console.log(modulo);
console.log(power);

const fiyat = 15;
const adet = 6;

const sepetTutari = fiyat * adet;

console.log(sepetTutari);

let x = 2;
x = x + 1; //    x += 1
x = x - 1; //    x -= 1
x = x * 3; //    x *= 3
x = x / 2; //    x /= 2
x = x % 4; //    x %= 4

// Strings

const age = 55;
const name = 'Joan';

const message = 'Joe is 25 years old';
const message2 = name + ' is ' + age + ' years old';
const message3 = isOpen + ' is ' + age + ' years old'; //   Implicit
console.log(message);
console.log(message2);
console.log(message3);

console.log(2 + 4);
console.log('2' + '4');
console.log('2 ' + 4);

console.log(String(5)); //   Explicit

// Templete Literate

const appName = 'GoIT';
const greeting = 'Welcome to our app! ' + appName;
const greeting2 = `Welcome to our app! ${appName}`;

console.log(greeting);
console.log(greeting2);

console.log(greeting2.length);
console.log(greeting2[5]);