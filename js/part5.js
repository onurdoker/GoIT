// function makePizza() {
//     return 'Your pizza is being prepared, please wait.';
// }

// const result = makePizza();
// const pointer = makePizza;

//Callback functions
// function deliverPizza(pizzaName) {
//     return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//     return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// function makeMessage(pizzaName, callback) {
//     return callback(pizzaName);
// }

// console.log(result = makeMessage('Royal Grand', makePizza));
// console.log(result = makeMessage('Royal Grand', deliverPizza));

// inline callback functions
// function makePizza(pizzaName, callback) {
//     console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//     callback(pizzaName);
// }

// makePizza('Royal Grand', function deliverPizza(pizzaName) {
//     console.log(`Delivering pizza ${pizzaName}`);
// });

// makePizza('Ultracheese', function eatPizza(pizzaName) {
//     console.log(`Eating pizza ${pizzaName}`);
// });

// const numbers = [5, 10, 15, 20, 25];

// // Classic for
// for (let i = 0; i < numbers.length; i += 1) {
//     console.log(`index ${i}, value ${numbers[i]}`);
// }

// //forEach loop
// numbers.forEach(function (number, index) {
//     console.log(`index ${index}, value ${number}`);
// });

// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
//     orderedItems.forEach(function (number) {
//         totalPrice += number;
//     });
//     return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4])); //138
// console.log(calculateTotalPrice([164, 48, 291]));  //503

// function filterArray(numbers, value) {
//     const filteredArray = [];
//     numbers.forEach(function (number) {
//         if (number > value) {
//             filteredArray.push(number);
//         }
//     });
//     return filteredArray;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]

// Arrow functions
// const calculateTotalPrice = (quantity, pricePerItem) => {
//     return quantity * pricePerItem;
// };

// console.log(calculateTotalPrice(5, 100)); // 500
// console.log(calculateTotalPrice(8, 60));  // 480

// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// console.log(calculateTotalPrice(5, 100)); // 500
// console.log(calculateTotalPrice(8, 60));  // 480


// const calculateTotalPrice = (orderedItems) => {
//     let totalPrice = 0;
//     orderedItems.forEach((item) => {
//         totalPrice += item;
//     });
//     return totalPrice;
// };

// console.log(calculateTotalPrice([12, 85, 37, 4])); //138
// console.log(calculateTotalPrice([164, 48, 291]));  //503

// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     numbers.forEach(function (number) {
//         if (number > value) {
//             filteredNumbers.push(number);
//         }
//     });
//     return filteredNumbers;
// }

// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];
//     numbers.forEach((number) => {
//         if (number > value) {
//             filteredNumbers.push(number);
//         }
//     });
//     return filteredNumbers;
// };

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]

// MAP and flatMAP methods
// const dirtyMultiply = (array, value) => {
//     for (let i = 0; i < array.length; i += 1) {
//         array[i] = array[i] * value;
//     }
// };

// const numbers = [1, 2, 3, 4, 5];
// dirtyMultiply(numbers, 2);
// console.log(numbers);

// const pureMultiply = (array, value) => {
//     const newArray = [];
//     array.forEach((element) => {
//         array() = (element * value);
//     });
//     return array;
// };

// const numbers = [1, 2, 3, 4, 5];
// const doubleNumbers = pureMultiply(numbers, 2);
// console.log(doubleNumbers);

// function changeEven(numbers, value) {
//     for (let i = 0; i < numbers.length; i += 1) {
//         if (numbers[i] % 2 === 0) {
//             numbers[i] = numbers[i] + value;
//         }
//     }
//     return numbers;
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10)); // [1, 12, 3, 14, 5]

// function changeEven(numbers, value) {
//     const newNumbers = [];
//     numbers.forEach((number) => {
//         if (number % 2 === 0) {
//             newNumbers.push(number + value);
//         } else {
//             newNumbers.push(number);
//         }
//     });
//     return newNumbers;
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10)); // [1, 12, 3, 14, 5]

// const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];

// const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
// console.log(planetsInUpperCase);

// function planetsInUpperCase2(planets) {
//     for (let i = 0; i < planets.length; i += 1) {
//         planets[i] = planets[i].toUpperCase();
//     }
//     return planets;
// }
// console.log(planetsInUpperCase2(planets));

// function planetsInUpperCase3(planets) {
//     const newPlanets = [];
//     planets.forEach((planet) => {
//         newPlanets.push(planet.toUpperCase());
//     });
//     return newPlanets;
// }
// console.log(planetsInUpperCase3(planets));

// function planetsLengths(planets) {
//     const planetsLengths = [];
//     for (let i = 0; i < planets.length; i++) {
//         planetsLengths.push(planets[i].length);
//     }
//     return planetsLengths;
// }
// console.log(planetsLengths(planets));

// function planetsLengths2(planets) {
//     const planetsLengths2 = [];
//     planets.forEach((planet) => {
//         planetsLengths2.push(planet.length);
//     });
//     return planetsLengths2;
// }

// console.log(planetsLengths2(planets));

// const planetsLengths3 = planets.map(planet => planet.length);
// console.log(planetsLengths3);

// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         rating: 8.38
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         rating: 8.51
//     },
//     {
//         title: "The Dream of a Ridiculous Man",
//         author: "Fyodor Dostoevsky",
//         rating: 7.75
//     },
//     {title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94},
//     {title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67}
// ];

// const titles = books.map(book => book.title);
// console.log(titles);

// const students = [
//     {name: 'Mango', courses: ['mathematics', 'physics']},
//     {name: 'Poly', courses: ['science', 'mathematics']},
//     {name: 'Mango', courses: ['physics', 'biology']},
// ]

// const mappedCourses = students.map(student => student.courses)
// console.log(mappedCourses);

// const flattenedCourses = students.flatMap(student => student.courses)
// console.log(flattenedCourses)

// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         genres: ["adventure", "history"],
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         genres: ["fiction"],
//     },
//     {
//         title: "Redder Than Blood",
//         author: "Tanith Lee",
//         genres: ["horror", "mysticism"],
//     },
// ];

// const genres = books.flatMap(book => book.genres);
// console.log(genres);


// users = [
//     {
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         eyeColor: "blue",
//         friends: ["Sharron Pace"],
//         isActive: false,
//         balance: 2811,
//         skills: ["ipsum", "lorem"],
//         gender: "male",
//         age: 37,
//     },
//     {
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//         eyeColor: "blue",
//         friends: ["Briana Decker", "Sharron Pace"],
//         isActive: true,
//         balance: 3821,
//         skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//         gender: "female",
//         age: 34,
//     },
//     {
//         name: "Ross Vazquez",
//         email: "rossvazquez@xinware.com",
//         eyeColor: "green",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//         isActive: false,
//         balance: 3793,
//         skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//         gender: "male",
//         age: 24,
//     },
//     {
//         name: "Elma Head",
//         email: "elmahead@omatom.com",
//         eyeColor: "green",
//         friends: ["Goldie Gentry", "Aisha Tran"],
//         isActive: true,
//         balance: 2278,
//         skills: ["adipisicing", "irure", "velit"],
//         gender: "female",
//         age: 21,
//     },
//     {
//         name: "Carey Barr",
//         email: "careybarr@nurali.com",
//         eyeColor: "blue",
//         friends: ["Jordan Sampson", "Eddie Strong"],
//         isActive: true,
//         balance: 3951,
//         skills: ["ex", "culpa", "nostrud"],
//         gender: "male",
//         age: 27,
//     },
//     {
//         name: "Blackburn Dotson",
//         email: "blackburndotson@furnigeer.com",
//         eyeColor: "brown",
//         friends: ["Jacklyn Lucas", "Linda Chapman"],
//         isActive: false,
//         balance: 1498,
//         skills: ["non", "amet", "ipsum"],
//         gender: "male",
//         age: 38,
//     },
//     {
//         name: "Sheree Anthony",
//         email: "shereeanthony@kog.com",
//         eyeColor: "brown",
//         friends: ["Goldie Gentry", "Briana Decker"],
//         isActive: true,
//         balance: 2764,
//         skills: ["lorem", "veniam", "culpa"],
//         gender: "female",
//         age: 39,
//     },
// ];

// const emails = users.map(user => user.email);
// console.log(emails)

// const getUserEmails = (users) => users.map((user) => user.email);
// console.log(getUserEmails(users));

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// const evenNumbers = numbers.filter(number => number %2 ===0)
// const oddNumbers = numbers.filter(number=> number %2 !== 0)
// console.log(evenNumbers, oddNumbers);

// const Low_Score = 50;
// const High_Score = 80;
// const students = [
//     {name: 'Mango', score: 83},
//     {name: 'Poly', score: 59},
//     {name: 'Ajax', score: 37},
//     {name: 'Kiwi', score: 94},
//     {name: 'Houston', score: 64},
// ];

// const best = students.filter(student => student.score >= High_Score)
// const worst = students.filter(student => student.score <= Low_Score)
// const average = students.filter(student => student.score >= Low_Score && student.score <= High_Score)
// console.log(average);

// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         rating: 8.38,
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         rating: 8.51,
//     },
//     {
//         title: "The Dream of a Ridiculous Man",
//         author: "Fyodor Dostoevsky",
//         rating: 7.75,
//     },
//     { title: "Redder Than Blood",
//         author: "Tanith Lee",
//         rating: 7.94
//     },
//     { title: "Enemy of God",
//         author: "Bernard Cornwell",
//         rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell"
// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);
// console.log(topRatedBooks)
// console.log(booksByAuthor)


// let users = [
//     {
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         eyeColor: "blue",
//         friends: ["Sharron Pace"],
//         isActive: false,
//         balance: 2811,
//         gender: "male"
//     },
//         {
//             name: "Sharlene Bush",
//             email: "sharlenebush@tubesys.com",
//             eyeColor: "blue",
//             friends: ["Briana Decker", "Sharron Pace"],
//             isActive: true,
//             balance: 3821,
//             gender: "female"
//         },
//         {
//             name: "Ross Vazquez",
//             email: "rossvazquez@xinware.com",
//             eyeColor: "green",
//             friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//             isActive: false,
//             balance: 3793,
//             gender: "male"
//         },
//         {
//             name: "Elma Head",
//             email: "elmahead@omatom.com",
//             eyeColor: "green",
//             friends: ["Goldie Gentry", "Aisha Tran"],
//             isActive: true,
//             balance: 2278,
//             gender: "female"
//         },
//         {
//             name: "Carey Barr",
//             email: "careybarr@nurali.com",
//             eyeColor: "blue",
//             friends: ["Jordan Sampson", "Eddie Strong"],
//             isActive: true,
//             balance: 3951,
//             gender: "male"
//         },
//         {
//             name: "Blackburn Dotson",
//             email: "blackburndotson@furnigeer.com",
//             eyeColor: "brown",
//             friends: ["Jacklyn Lucas", "Linda Chapman"],
//             isActive: false,
//             balance: 1498,
//             gender: "male"
//         },
//         {
//             name: "Sheree Anthony",
//             email: "shereeanthony@kog.com",
//             eyeColor: "brown",
//             friends: ["Goldie Gentry", "Briana Decker"],
//             isActive: true,
//             balance: 2764,
//             gender: "female"
//         }
//     ];

// const getUsersWithEyeColor = (users, color) => {
//     return users.filter(user => user.eyeColor === color)};
// console.log(getUsersWithEyeColor(users, "blue"));

// let users = [
//     {
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         eyeColor: "blue",
//         friends: ["Sharron Pace"],
//         isActive: false,
//         balance: 2811,
//         gender: "male",
//         age: 37
//     },
//     {
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//         eyeColor: "blue",
//         friends: ["Briana Decker", "Sharron Pace"],
//         isActive: true,
//         balance: 3821,
//         gender: "female",
//         age: 34
//     },
//     {
//         name: "Ross Vazquez",
//         email: "rossvazquez@xinware.com",
//         eyeColor: "green",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//         isActive: false,
//         balance: 3793,
//         gender: "male",
//         age: 24
//     },
//     {
//         name: "Elma Head",
//         email: "elmahead@omatom.com",
//         eyeColor: "green",
//         friends: ["Goldie Gentry", "Aisha Tran"],
//         isActive: true,
//         balance: 2278,
//         gender: "female",
//         age: 21
//     },
//     {
//         name: "Carey Barr",
//         email: "careybarr@nurali.com",
//         eyeColor: "blue",
//         friends: ["Jordan Sampson", "Eddie Strong"],
//         isActive: true,
//         balance: 3951,
//         gender: "male",
//         age: 27
//     },
//     {
//         name: "Blackburn Dotson",
//         email: "blackburndotson@furnigeer.com",
//         eyeColor: "brown",
//         friends: ["Jacklyn Lucas", "Linda Chapman"],
//         isActive: false,
//         balance: 1498,
//         gender: "male",
//         age: 38
//     },
//     {
//         name: "Sheree Anthony",
//         email: "shereeanthony@kog.com",
//         eyeColor: "brown",
//         friends: ["Goldie Gentry", "Briana Decker"],
//         isActive: true,
//         balance: 2764,
//         gender: "female",
//         age: 39
//     }
// ];

// const getUsersWithAge = (users, minAge, maxAge) => {
//     return users.filter(user => user.age >= minAge && user.age <= maxAge)
// };
// console.log(getUsersWithAge(users, 20, 30));

// const colorPickerOptions = [
//     { label: "red", color: "#F44336" },
//     { label: "green", color: "#4CAF50" },
//     { label: "blue", color: "#2196F3" },
//     { label: "pink", color: "#E91E63" },
//     { label: "indigo", color: "#3F51B5" },
// ];

// console.log(colorPickerOptions.find(option => option.label === "blue"));
// // { label: "blue", color: "#2196F3" }
// console.log(colorPickerOptions.find((option) => option.label === "pink"));
// // { label: "pink", color: "#E91E63" }
// console.log(colorPickerOptions.find((option) => option.label === "white"));
// // undefined

// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         rating: 8.38,
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         rating: 8.51,
//     },
//     {
//         title: "The Dream of a Ridiculous Man",
//         author: "Fyodor Dostoevsky",
//         rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// ];
// const BOOK_TITLE = "The Dream of a Ridiculous Man";
// const AUTHOR = "Robert Sheckley";

// const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
// const bookByAuthor = books.find(book => book.author === AUTHOR);
// console.log(bookWithTitle);
// console.log(bookByAuthor);

// let users = [
//     {
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         eyeColor: "blue",
//         friends: ["Sharron Pace"],
//         isActive: false,
//         balance: 2811,
//         gender: "male"
//     },
//     {
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//         eyeColor: "blue",
//         friends: ["Briana Decker", "Sharron Pace"],
//         isActive: true,
//         balance: 3821,
//         gender: "female"
//     },
//     {
//         name: "Ross Vazquez",
//         email: "rossvazquez@xinware.com",
//         eyeColor: "green",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//         isActive: false,
//         balance: 3793,
//         gender: "male"
//     },
//     {
//         name: "Elma Head",
//         email: "elmahead@omatom.com",
//         eyeColor: "green",
//         friends: ["Goldie Gentry", "Aisha Tran"],
//         isActive: true,
//         balance: 2278,
//         gender: "female"
//     },
//     {
//         name: "Carey Barr",
//         email: "careybarr@nurali.com",
//         eyeColor: "blue",
//         friends: ["Jordan Sampson", "Eddie Strong"],
//         isActive: true,
//         balance: 3951,
//         gender: "male"
//     },
//     {
//         name: "Blackburn Dotson",
//         email: "blackburndotson@furnigeer.com",
//         eyeColor: "brown",
//         friends: ["Jacklyn Lucas", "Linda Chapman"],
//         isActive: false,
//         balance: 1498,
//         gender: "male"
//     },
//     {
//         name: "Sheree Anthony",
//         email: "shereeanthony@kog.com",
//         eyeColor: "brown",
//         friends: ["Goldie Gentry", "Briana Decker"],
//         isActive: true,
//         balance: 2764,
//         gender: "female"
//     }
// ]

// const getUserWithEmail = (users, email) => {
//     return users.find(user => user.email === email)
// }

// console.log(getUserWithEmail(users,"elmahead@omatom.com"))
// console.log(getUserWithEmail(users, "shereeanthony@kog.com"))

///////////////////////////////////
// every, some and reduce methods
// [1, 2, 3, 4, 5].every((value) => {
// 	value >= 0;
// }) // true

// const products = [
// 	{name: "apple", quality: 2},
// 	{name: "orange", quality: 5},
// 	{name: "plum", quality: 0},
// ];
// const hasEveryProduct = products.every(product => product.quality > 0);
// console.log(hasEveryProduct);

// const users = [
// 	{
// 		name: "Moore Hensley",
// 		email: "moorehensley@indexia.com",
// 		eyeColor: "blue",
// 		friends: ["Sharron Pace"],
// 		isActive: false,
// 		balance: 2811,
// 		gender: "male"
// 	},
// 	{
// 		name: "Sharlene Bush",
// 		email: "sharlenebush@tubesys.com",
// 		eyeColor: "blue",
// 		friends: ["Briana Decker", "Sharron Pace"],
// 		isActive: true,
// 		balance: 3821,
// 		gender: "female"
// 	},
// 	{
// 		name: "Ross Vazquez",
// 		email: "rossvazquez@xinware.com",
// 		eyeColor: "green",
// 		friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// 		isActive: false,
// 		balance: 3793,
// 		gender: "male"
// 	},
// 	{
// 		name: "Elma Head",
// 		email: "elmahead@omatom.com",
// 		eyeColor: "green",
// 		friends: ["Goldie Gentry", "Aisha Tran"],
// 		isActive: true,
// 		balance: 2278,
// 		gender: "female"
// 	},
// 	{
// 		name: "Carey Barr",
// 		email: "careybarr@nurali.com",
// 		eyeColor: "blue",
// 		friends: ["Jordan Sampson", "Eddie Strong"],
// 		isActive: true,
// 		balance: 3951,
// 		gender: "male"
// 	},
// 	{
// 		name: "Blackburn Dotson",
// 		email: "blackburndotson@furnigeer.com",
// 		eyeColor: "brown",
// 		friends: ["Jacklyn Lucas", "Linda Chapman"],
// 		isActive: false,
// 		balance: 1498,
// 		gender: "male"
// 	},
// 	{
// 		name: "Sheree Anthony",
// 		email: "shereeanthony@kog.com",
// 		eyeColor: "brown",
// 		friends: ["Goldie Gentry", "Briana Decker"],
// 		isActive: true,
// 		balance: 2764,
// 		gender: "female"
// 	}
// ]
// const isEveryUserActive = (users) => users.every(user => user.isActive === true);
// console.log(isEveryUserActive(users));

// some() method
// array.some((element, index, array) => {}) //syntax
// console.log([1, 2, 3, 4, 5].some(value => value >= 0));
// const isAnyUserActive = (users) => users.some(user => user.isActive === true);
// console.log(isAnyUserActive(users));

//reduce() method
// array.reduce((previousValue, elemnent, index, array) => {
// }, initialValue); // syntax

// const total = [2, 7, 3].reduce((previousValue, number) => {
// 	return previousValue + number;
// }, 0)
// console.log(total);

// const players = {
// 	mango: 1270,
// 	poly: 468,
// 	ajax: 710,
// 	kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// console.log(playtimes);

// const totalPlayTime = playtimes.reduce((acc, number) => {
// 	return acc + number
// })
// console.log(totalPlayTime);

// const averagePlayTime = totalPlayTime / playtimes.length;
// console.log(averagePlayTime);

// const students = [
// 	{name: 'mango', score: 83},
// 	{name: 'Poly', score: 59},
// 	{name: 'Ajax', score: 37},
// 	{name: 'Kiwi', score: 94},
// 	{name: 'Houston', score: 64},
// ];
// const totalScore = students.reduce((total, student) => {
// 	return total + student.score;
// }, 0);
// const averageScore = totalScore / students.length;
// console.log(averageScore);

// const players = [
// 	{name: 'Mango', playtime: 1270, gamesPlayed: 4},
// 	{name: 'Poly', playtime: 469, gamesPlayed: 2},
// 	{name: 'Ajax', playtime: 690, gamesPlayed: 3},
// 	{name: 'Kiwi', playtime: 241, gamesPlayed: 1},
// ]
// const totalAveragePlaytimePerGame = players.reduce((acc, player) => {
// 	return acc + player.playtime / player.gamesPlayed;
// }, 0)
// console.log(totalAveragePlaytimePerGame);

// const users = [
// 	{
// 		name: "Moore Hensley",
// 		email: "moorehensley@indexia.com",
// 		eyeColor: "blue",
// 		friends: ["Sharron Pace"],
// 		isActive: false,
// 		balance: 2811,
// 		gender: "male"
// 	},
// 	{
// 		name: "Sharlene Bush",
// 		email: "sharlenebush@tubesys.com",
// 		eyeColor: "blue",
// 		friends: ["Briana Decker", "Sharron Pace"],
// 		isActive: true,
// 		balance: 3821,
// 		gender: "female"
// 	},
// 	{
// 		name: "Ross Vazquez",
// 		email: "rossvazquez@xinware.com",
// 		eyeColor: "green",
// 		friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// 		isActive: false,
// 		balance: 3793,
// 		gender: "male"
// 	},
// 	{
// 		name: "Elma Head",
// 		email: "elmahead@omatom.com",
// 		eyeColor: "green",
// 		friends: ["Goldie Gentry", "Aisha Tran"],
// 		isActive: true,
// 		balance: 2278,
// 		gender: "female"
// 	},
// 	{
// 		name: "Carey Barr",
// 		email: "careybarr@nurali.com",
// 		eyeColor: "blue",
// 		friends: ["Jordan Sampson", "Eddie Strong"],
// 		isActive: true,
// 		balance: 3951,
// 		gender: "male"
// 	},
// 	{
// 		name: "Blackburn Dotson",
// 		email: "blackburndotson@furnigeer.com",
// 		eyeColor: "brown",
// 		friends: ["Jacklyn Lucas", "Linda Chapman"],
// 		isActive: false,
// 		balance: 1498,
// 		gender: "male"
// 	},
// 	{
// 		name: "Sheree Anthony",
// 		email: "shereeanthony@kog.com",
// 		eyeColor: "brown",
// 		friends: ["Goldie Gentry", "Briana Decker"],
// 		isActive: true,
// 		balance: 2764,
// 		gender: "female"
// 	}
// ]

// const calculateTotalBalance = users.reduce((acc, user) => acc + user.balance, 0)
// const calculateTotalBalance2 = (users) => {
// 	return users.reduce((acc, user) => acc + user.balance, 0)
// }
// console.log(calculateTotalBalance, calculateTotalBalance2(users));

// toSorted method
// const scores = [61, 19, 74, 35, 92, 56]
// const ascendingScores = scores.toSorted()
// console.log(scores, ascendingScores)

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997]
// const authors = [
// 	'Tanith Lee',
// 	'Bernard Cornwell',
// 	'Robert Sheckley',
// 	'Fyodor Dostoevsky',
// ]

// const ascendingReleaseDates = releaseDates.toSorted((a, b) => a - b);
// const descendingReleaseDates = releaseDates.toSorted((a, b) => b - a);

// console.log(ascendingReleaseDates)
// console.log(descendingReleaseDates)

// const authors = [
// 	"Tanith Lee",
// 	"Bernard Cornwell",
// 	"Robert Sheckley",
// 	"Fyodor Dostoevsky",
// 	"Howard Lovecraft",
// ];

// const authorsInAlphabetOrder = authors.toSorted();
// const authorsInAlphabetOrder2 = authors.toSorted((a, b) => a - b);
// const authorsInAlphabetOrder3 = authors.toSorted((a, b) => a.localeCompare(b));
// console.log(authorsInAlphabetOrder);
// console.log(authorsInAlphabetOrder2);
// console.log(authorsInAlphabetOrder3);
// const authorsInReversedOrder = authors;

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
// 	{
// 		title: "Redder Than Blood",
// 		author: "Tanith Lee",
// 		rating: 7.94,
// 	},
// 	{
// 		title: "Enemy of God",
// 		author: "Bernard Cornwell",
// 		rating: 8.67,
// 	},
// ];
// const sortedByAuthorName = books.toSorted((a, b) => a.author.localeCompare(b.author))
// console.log(sortedByAuthorName)
// const sortedByReversedAuthorName = books.toSorted((a, b) => b.author.localeCompare(a.author));
// console.log(sortedByReversedAuthorName);
// const sortedByAscendingRating = books.toSorted((a, b) => a.rating - b.rating);
// console.log(sortedByAscendingRating);
// const sortedByDescentingRating = books.toSorted((a, b) => b.rating - a.rating);
// console.log(sortedByDescentingRating);

// const students = [
// 	{name: "Mango", score: 83, courses: ["mathematics", "physics"]},
// 	{name: "Poly", score: 59, courses: ["science", "mathematics"]},
// 	{name: "Ajax", score: 37, courses: ["physics", "biology"]},
// 	{name: "Kiwi", score: 94, courses: ["literature", "science"]},
// ];
// const sortedByAscendingScore = students.toSorted((a, b) => a.score - b.score);
// const names = sortedByAscendingScore.map(student => student.name);
// console.log(names);
// const names2 = students
// 	.toSorted((a, b) => a.score - b.score)
// 	.map(student => student.name);
// console.log(names2);
// const name3 = students
// 	.map(student => student.name)
// 	.toSorted((a, b) => a.localeCompare(b));
// console.log(name3);
// const name4 = students
// 	.toSorted((a, b) => a.name.localeCompare(b.name))
// 	.map(student => student.name);
// console.log(name3);

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
// 	{
// 		title: "The Dreams in the Witch House",
// 		author: "Howard Lovecraft",
// 		rating: 8.67,
// 	},
// ];
// const MIN_BOOK_RATING = 8;

// const names = books
// 	.filter(book => book.rating >= MIN_BOOK_RATING)
// 	.toSorted((a, b) => a.author.localeCompare(b.author))
// 	.map(book => book.author);
// console.log(names);