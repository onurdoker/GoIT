// Arrays
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];

// fruits[1] = 'peach';
// fruits[3] = 'banana';

// function getOrderQuantity(order) {
//     return order.length;
// }

// console.log(getOrderQuantity(['apple', 'peach', 'pear', 'banana']));

// function getLastElementMeta(array) {
//     return [array.length - 1, array[array.length - 1]];
// }

// console.log(getLastElementMeta(['apple', 'peach', 'pear', 'banana']));

// function getExtremeElements(array) {
//     return [array[0], array[array.length - 1]];
// }

// console.log(getExtremeElements(['apple', 'peach', 'pear', 'banana']));

// join
// function getLength(array) {
//     return array.join('').length;
// }

// console.log(getLength(['Mango', 'hurries', 'to', 'the', 'train']))

// Split
// function calculateEngravingPrice(message, pricePerWord) {
//     return message.split(' ').length * pricePerWord;
// }

// console.log(calculateEngravingPrice('JavaScript is in my blood', 10))

// Slice
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(fruits.length - 3);

// Concat
// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Peach", "Houston"];

// const allClients = oldClients.concat(newClients);


// Slice
// function getSlice(array, value) {
//     const position = array.indexOf(value);
//     return array.slice(0, position + 1);
//
//     return array.slice(0, array.indexOf(value) + 1);
// }


// console.log(getSlice(['Mango', 'Ajax', 'Poly', 'Kiwi'], 'Poly'));

// Push
// function createArrayOfNumbers(min, max) {
//     let array = [];
//     for (let i = min; i <= max; i++) {
//         array.push(i);
//     }
//     return array;
// }

// console.log(createArrayOfNumbers(14, 17));

// function calculateTotalPrice(order) {
//     let sum = 0;
//     for (let i = 0; i <= order.length - 1; i++) {
//         sum += order[i];
//     }
//     return sum;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));

// function getEvenNumbers(start, end) {
//     const evenNumbers = [];
//     for (let i = start; i <= end; i++) {
//         if (i % 2 === 0) {
//             evenNumbers.push(i);
//         }
//     }
//     return evenNumbers;
// }

// console.log(getEvenNumbers(6, 11));

// includes()
// function checkStorage(storage, item) {
// if (storage.includes(item.toLowerCase())) {
//     return `${item.toLowerCase()} is available to order!`;
// } else {
//     return 'Sorry! We are out of stock!';
// }

//     return (storage.includes(item.toLowerCase()) ? `${item.toLowerCase()} is available to order!` : 'Sorry! We are out of stock!');
// }


// console.log(checkStorage(['apple', 'plum', 'pear'], 'pluM'));

// function getCommonElements(array1, array2) {
//     const commonElements = [];
//     for (let i = 0; i < array1.length; i += 1) {
//         const element = array1[i];
//         if (array2.includes(element)) {
//             commonElements.push(element);
//         }
//     }
//     return commonElements;
// }

// for ... of
// function calculateTotalPrice(order) {
//     let sum = 0;
//     for (i of order) {
//         sum += i;
//     }
//     return sum;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));

// Arguments
// function createReversedArray() {
//     let len = arguments.length;
//     const toReversed = [];
//     for (let i = len - 1; i >= 0; i--) {
//         toReversed.push(arguments[i]);
//     }
//     return toReversed;
// }

// console.log(createReversedArray(12, 85, 37, 4));
// console.log(createReversedArray(412, 371, 94, 63, 176));

// Default values
// function calculateTax(amount, taxRate = 0.2) {
//     return amount * taxRate;
// }

// console.log(calculateTax(100,));

// Functional Expressions
