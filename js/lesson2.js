let x = 5;

console.log(x); // 5
console.log(++x);  // 6 pre-increment operator
console.log(x++);  // 6 post-increment operator
console.log(x); // 7

////////////////////////////

x = 2;
let y = 5;

// Results turn as Boolean
console.log(x < y);
console.log(y <= y);
console.log(x > y);
console.log(x >= y);

console.log(3 === 3);
console.log(3 == 3);
console.log(3 == '3');
console.log(3 === '3');

console.log(3 !== 3);

console.log(Number('13')); // 13
console.log(typeof Number('13')); //number
console.log(Number('Merhaba')); //NaN Not a Number
console.log(Number(undefined)); //NaN Not a Number

console.log('5' * 5); // 25 '5' => turn number

console.log(13 + true); // 14 => true means 1 => 13 + 1 = 14

console.log('5' + 5); // 55  => + concat operator so dont turn '5' to number

console.log(Number.parseInt('5')); // 5 (Number)
console.log(Number.parseInt('5.5')); // 5
console.log(Number.parseInt('5dk')); // 5
console.log(Number.parseInt('dk5')); // NaN

console.log(Number.parseFloat('5.5')); // 5.5
console.log(Number.parseFloat('5dk')); // 5
console.log(Number.parseFloat('dk5')); // NaN

let newVar = x.toString(); // turn number to string
console.log(newVar); // 2 => string

console.log(Math.floor(1.6)); // 1
console.log(Math.ceil(1.6)); // 2
console.log(Math.round(1.6)); // 2
console.log(Math.round(1.4)); // 1
console.log(Math.max(13, 7, 35, 76)); // 76
console.log(Math.min(13, 7, 35, 76)); // 7

console.log(Math.random()); // a random a number 0 to 1
console.log(Math.random() * 10); // a random a number 0 to 1
console.log(Math.floor(Math.random() * 10)); // a random a number 0 to 1

console.log(0.1 + 0.2 === 0.3); // false
console.log(0.1 * 10 + 0.2 * 10 === 0.3 * 10); // true

console.log((5).toFixed(2));
console.log((5.98384048271).toFixed(2));
console.log((0.1 + 0.2).toFixed() === 0.3.toFixed()); // true

/////////////////////////////////////////////////
// Functions
function print() {
    // function body
    console.log('Hello');
}

print();


// Parameters and Arguments
function yaz(x, y, z) { // => x, y, z parameters
    console.log(`hi ${x + y + z}`);
    const sum = x + y + z;
    return sum;
}

yaz(1, 4, 5); // 1, 4, 5 => Arguments

function greetings(name) {
    console.log(`Hi ${name}`);
}

greetings('Onur');

//////////////////
// Scope
let a = 8; // global scope

function sum2() {
    a = 19; // local value/scope
    console.log(a);
}

console.log(a); // undefined
sum2();
console.log(a); // undefined
