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
// console.log(getUserWithEmail(users,"shereeanthony@kog.com"))

///////////////////////////////////
