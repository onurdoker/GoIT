/*
let productName = "Droid";
let pricePerItem = 2000;

// Change code below this line
productName = "Repair droid";
pricePerItem = 3500;

topSpeed = 160;
distance = 617.54;
login = "mango935";
isOnline = true;
isAdmin = false;

const quantity = 17;
console.log(typeof quantity);

const message = "JavaScript is awesome."
console.log(typeof message);
const pricePerItem = 3500;
const orderedQuantity = 4;

// Change code below this line
const totalPrice = pricePerItem * orderedQuantity;

const message = 'Mango ' + "is " + "happy";
console.log(message);

const age = 24;
const message = 'Poly is ' + age + ' years old!';
console.log(message);

const username = 'Poly';
const message = 'Wellcome ' + username + '!';
console.log(message);

console.log("false" + null)

const productName = 'Droid';
const pricePerItem = 3500;
const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
console.log(message);

const pricePerDroid = 800;
const orderedQuantity = 6;
const deliveryFee = 50;
const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
const message = `You ordered droids worth ${totalPrice} credits`
console.log(message);

const username = 'Harambe';
const message = `Username ${username} is ${username.length} characters long`;
console.log(message)

const product = "Repair droid";
const lastElementIndex = product.length - 1;
console.log(product[lastElementIndex]); // 'd'

const courseTopic = "JavaScript essentials";

const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopicLength-1];

const age = 20;
const isAdult = age >= 18;
console.log(isAdult);

const correctPassword = "jqueryismyjam";
const userPassword = "mangodab3st";
const isValid = userPassword === correctPassword;
console.log(isValid);

const value = "14cm";
const numerical = Number.parseFloat(value);
console.log(typeof numerical, numerical);

function sayHi() {
    console.log('Hello, this is my first function!');
}

sayHi()

function add(a, b, c) {
    console.log('Addition result equals ' + (a + b + c));
}

add(15, 27, 10);
add(10, 20, 30);
add(5, 10, 15);

function add(a, b, c) {
    return a + b + c;
}

add(15, 27, 10)
add(10, 20, 30)
add(5, 10, 15)

function makeMessage (name, price) {
    return `You picked ${name}, price per item is ${price} credits`
};


makeMessage('Radar', 6150);
makeMessage('Scanner', 3500);
makeMessage('Reactor', 8000);
makeMessage('Engine', 4070);
*/
function calculateTotalPrice (orderedQuantity, pricePerItem) {
    return orderedQuantity * pricePerItem;
}

calculateTotalPrice(5, 100)