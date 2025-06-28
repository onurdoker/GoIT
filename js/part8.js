// const parent = document.querySelector('#parent');
// const child = document.querySelector('#child');
// const descendant = document.querySelector('#descendant');

// parent.addEventListener('click', () => {
// 	console.log('parent click handler')
// })

// parent.addEventListener('click', (event) => {
// 	console.log('event.target: ', event.target);
// 	console.log('event.currentTarget: ', event.currentTarget);
// });
// child.addEventListener('click', () => {
// 	console.log('child click handler')
// })
// descendant.addEventListener('click', () => {
// 	console.log('descendant click handler')
// })

// parent.addEventListener('click', () => {
// 	alert(
// 		'Parent click handler. This alert will not appear when clicking on Descendant, the event will not reach here!'
// 	);
// });
// child.addEventListener('click', (event) => {
// 	event.stopPropagation();
// 	alert('Child click handler');
// });
// descendant.addEventListener('click', (event) => {
// 	event.stopPropagation()
// 	alert('Descendant click handler')
// })

// const box = document.querySelecktor('div.box');
// box.addEventListener('click', function (event) {
// 	console.log(event.target);
// });

// const colorPalette = document.querySelector('.color-palette');
// colorPalette.addEventListener('click', selectColor);
// function selectColor(event) {
// 	console.log(event.target);
// 	const selectedColor = event.target.dataset.color;
// }

// const colorPalette = document.querySelector('.color-palette');
// const output = document.querySelector('.output');
// colorPalette.addEventListener('click', selectColor);

// This is where delegation <<magic>> happens
// function selectColor(event) {
// 	if (event.target.nodeName !== 'BUTTON') {
// 		return;
// 	}
// 	const selectedColor = event.target.dataset.color;
// 	output.textContent = `selected color: ${selectedColor}`;
// 	output.style.color = selectedColor;
// }

// Some helper function to render palette items
// createPaletteItems();
// function createPaletteItems() {
// 	const items = [];
// 	for (let i = 0; i < 60; i++) {
// 		const color = getRandomHexColor();
// 		const item = document.createElement('button');
// 		item.type = 'button';
// 		item.dataset.color = color;
// 		item.style.backgroundColor = color;
// 		item.classList.add('item');
// 		items.push(item);
// 	}
// 	colorPalette.append(...items);
// }

// function getRandomHexColor() {
// 	const letters = '0123456789ABCDEF';
// 	let color = '#';
// 	for (let i = 0; i < 6; i++) {
// 		color += letters[Math.floor(Math.random() * 16)];
// 	}
// 	return color;
// }

// console.log(_.sum([4, 2, 8]))

// const user = {
// 	name: 'jacob',
// 	age: 32
// };

// const {name, age} = user;
// console.log(name)
// console.log(age)

// const book = {
// 	title: 'The Last Kingdom',
// 	author: 'Bernard Cornwell',
// 	genres: ['historical prose', 'adventure'],
// 	isPublic: true,
// 	rating: 8.38
// };
// const accessType = book.isPublic ? 'public' : 'private';
// const message = `Book ${book.title} by author ${book.author} with rating ${book.rating} is in ${accessType} access!`;
// console.log(message);

// const {title, author, isPublic, rating} = book;
// const accessType = isPublic ? 'public' : 'private';
// const message = `Book ${title} by author ${author} with rating ${rating} is in ${accessType} access!`;
// console.log(message);

// const {title, bookTitle, coverImage, bookRating} = book;
// console.log(bookTitle);
// console.log(bookRating);
// console.log(title);
// console.log(coverImage);

const books = [
	{
		title: 'The Last Kingdom',
		author: 'Bernard Cornwell',
		rating: 8.38
	},

	{
		title: 'The Last Kingdom',
		author: 'Bernard Cornwell',
		rating: 8.38
	},
];

// for (const book of books) {
// 	console.log(book.title);
// 	console.log(book.author);
// 	console.log(book.rating);
// }

// for (const book of books) {
// 	const {title, author, rating} = book;
// 	console.log(title);
// 	console.log(author);
// 	console.log(rating);
// }










