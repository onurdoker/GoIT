// const foo = () => {
// 	'mango';
// };
// console.log(foo());

// const foo = (a , b) =>  {
// 	let x = a + b;
// 	let y = a *b
// 	return x * y;
// 	let y2 = x + y;
// }
// console.log(foo());

// const values = [51, -3, 27, 21, -68, 42]
// const newArr = values.filter(val => val >= 0)
// console.log(newArr);

// const positiveNumArr = values.filter(val => val > 0)
// const negativeNumArr = values.filter(val => val < 0)
// const biggerThanThous = values.filter(val => val > 1000)
// const evenNumArr = values.filter(val => val % 2 === 0)

// console.log(positiveNumArr)
// console.log(negativeNumArr)
// console.log(biggerThanThous)
// console.log(evenNumArr)

// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
// 	{name: "Mango", score: 83},
// 	{name: "Poly", score: 59},
// 	{name: "Ajax", score: 37},
// 	{name: "Kiwi", score: 94},
// 	{name: "Houston", score: 64},
// ];
// const best = students.filter(student => student.score >= HIGH_SCORE);
// console.log(best);
// const worst = students.filter(student => student.score < LOW_SCORE);
// console.log(worst);
// const average = students.filter(
// 	student => student.score >= LOW_SCORE && student.score < HIGH_SCORE
// );
// console.log(average);

// const colorPickerOptions = [
// 	{label: "red", color: "#F44336"},
// 	{label: "red", color: "#F44337"},
// 	{label: "green", color: "#4CAF50"},
// 	{label: "blue", color: "#2196F3"},
// 	{label: "pink", color: "#E91E63"},
// 	{label: "indigo", color: "#3F51B5"},
// ];

// const theElement = colorPickerOptions.find((option) => option.label === "red");
// console.log(theElement);
// // colorPickerOptions.find((option) => option.label === "pink");
// // colorPickerOptions.find((option) => option.label === "white");

// const books = [
// 	{
// 		title: "The Last Kingdom",
// 		author: "Bernard Cornwell",
// 		rating: 8.38,
// 	},
// 	{
// 		title: "Beside Still Waters",
// 		author: "Robert Sheckley",
// 		rating: 8.51,
// 	},
// 	{
// 		title: "The Dream of a Ridiculous Man",
// 		author: "Fyodor Dostoevsky",
// 		rating: 7.75,
// 	},
// 	{title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94},
// ];
// const BOOK_TITLE = "The dream of a Ridiculous Man";
// const AUTHOR = "Robert Sheckley";

// const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
// const bookByAuthor = books;
// console.log(bookWithTitle);


// every and some methods
// const products = [
// 	{name: "apple", quantity: 2},
// 	{name: "orange", quantity: 5},
// 	{name: "plum", quantity: 0},
// ];

// const hasEveryProduct = products.every(product => product.quantity > 0);
// const hasSomeProduct = products.some(product => product.quantity > 3);
// console.log(hasEveryProduct);
// console.log(hasSomeProduct);


// reduce method
// const numbers = [3, 6, 8, 4, 3, 9]
// accumulator
// const total = numbers.reduce((acc, number) => {
// 	return acc + number
// }, 0)
// console.log(total)

const scores = [61, 19, 74, 35, 92, 56];
const ascendingScores = scores.toSorted((a, b) => a.localeCompare(b));
console.log(ascendingScores);


const lettes = ['a', 'b', 'c', 'd', 'e', 'f', 'A', 'B', 'C', 'D', 'E', 'F'];
const uppercaseLetters = lettes.toSorted((a, b) => a.localeCompare(b));
// [
//   'a', 'A', 'b', 'B',
//   'c', 'C', 'd', 'D',
//   'e', 'E', 'f', 'F'
// ]

console.log(uppercaseLetters);
console.log("a".localeCompare("A"))
