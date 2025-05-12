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

const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];

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

const books = [
    {
        title: "The Last Kingdom",
        author: "Bernard Cornwell",
        rating: 8.38
    },
    {
        title: "Beside Still Waters",
        author: "Robert Sheckley",
        rating: 8.51
    },
    {
        title: "The Dream of a Ridiculous Man",
        author: "Fyodor Dostoevsky",
        rating: 7.75
    },
    {title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94},
    {title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67}
];

const titles = books;