// Array of objects
// const books = [
// 	{
// 		title: 'The Last Kingdom',
// 		author: 'Bernard Cornwell',
// 		rating: 8.38,
// 		price: 3,
// 	},
// 	{
// 		title: 'Beside Still Waters',
// 		author: 'Robert Sheckley',
// 		rating: 8.51,
// 		price: 5,
// 	},
// 	{
// 		title: 'The Dream of a Ridiculous Man',
// 		author: 'Fyodor Dostoevsky',
// 		rating: 7.75,
// 		price: 8,
// 	},
// ]
// const authorToSearchFor = 'Robert Sheckley';

// for (const book of books) {
// 	if (book.author === authorToSearchFor) {
// 		console.log(book);
// 		console.log(book.title);
// 		console.log(book.rating);
// 		console.log(book.price);
// 	}
// }

// const title = [];
// for (const book of books) {
// 	title.push(book.title);
// 	console.log(title);
// }

// let totalRating = 0;

// for (const book of books) {
// 	totalRating += book.rating;
// }
// const averageRating = totalRating / books.length;
// console.log(averageRating);

// Properties
// methods

// const myObj = {
// 	username: 'John',
// 	myBooks: [{bookName: 'book1', price: 15},
// 		{bookName: 'book2', price: 25}],
// 	myMethod() {
// 		console.log('Hello');
// 	},
// 	addBook(newBook) {
// 		console.log('Adding a new book')
// 		this.myBooks.push(newBook);
// 		console.log(this.myBooks);
// 	},
// 	totalPrice() {
// 		let totalPrice = 0;
// 		for (const book of this.myBooks) {
// 			totalPrice += book.price;
// 		}
// 		return totalPrice;
// 	},
// }

// myObj.myMethod();
// myObj.addBook('book3');
// console.log(myObj.totalPrice());

// ... => spread operator or rest operator

// function multiply(a, b) {
// 	console.log(a, b);
// }

// function multiply(...arg) {  // => rest operator
// 	console.log(arg);
// }

// multiply(1, 2); // 1 2
// multiply(1, 2, 3); // 1 2
// multiply(1, 2, 3, 4); // 1 2

// const myNumbers = [25, 78, -3, 11]

// const theBiggest = Math.max(14, -4, 25, 8, 11)
// const theBiggest = Math.max(...myNumbers) // ... => spread operator
// console.log(theBiggest);

// const temps = [14, -4, 25, 8, 11];
// const temps2 = [33, 6, 55, 98, 1];
// const copyOfTemps = [...temps];
// copyOfTemps[0] = 100;
// console.log(copyOfTemps, temps);

// override
// const first = {probA: 5, probB: 10, probC: 25};
// const second = {probB: 5, probD: 10};
// // const third = {...first, ...second};
// // const third = first.(second);
// console.log(third);

