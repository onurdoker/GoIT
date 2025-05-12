/* jshint esversion: 6 */
// Dictionary
// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Spacious apartment in the city center',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top']
// };

// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Spacious apartment in the city center',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//     owner: {
//         name: 'Henry',
//         phone: '982-126-1588',
//         email: 'henry.carter@aptmail.com'
//     }
// };

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
// };

// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//         name: "Henry",
//         phone: "982-126-1588",
//         email: "henry.carter@aptmail.com",
//     },
// };

// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[numberOfTags - 1];

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
// };

// const aptRating = apartment['rating'];
// const aptDescr = apartment['descr'];
// const aptPrice = apartment['price'];
// const aptTags = apartment['tags'];

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//         name: "Henry",
//         phone: "982-126-1588",
//         email: "henry.carter@aptmail.com",
//     },
// };

// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = 'Henry Sibola';
// apartment.tags.push('trusted');

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4.7,
//     price: 5000,
//     tags: ["premium", "promoted", "top", "trusted"],
//     owner: {
//         name: "Henry Sibola",
//         phone: "982-126-1588",
//         email: "henry.carter@aptmail.com",
//     },
// };

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//     country: 'Jamaica',
//     city: "Kingston"
// };

// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//     name,
//     price,
//     image,
//     tags
// };

// console.log(product);

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {};

// credentials[emailInputName] = 'henry.carter@aptmail.com';
// credentials[passwordInputName] = 'jqueryismyjam';

// console.log(credentials);

//////////////////////////////////////////////////////
// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
// };

// const keys = [];
// const values = [];

// for (const key in apartment) {
//     keys.push(key);
//     values.push(apartment[key]);
// }

// console.log(keys, values);

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);

// for (const key of keys) {
//     values.push(apartment[key]);
// }

// console.log(keys, values);

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
// };

// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log(keys, values);

// function countTotalSalary(salaries) {
//     let totalSalary = 0;
//     const salary = Object.values(salaries);

// #1
// for (let i = 0; i < salary.length; i++) {
//     totalSalary += salary[i];
// }

// #2
// for (const value of salary) {
//     totalSalary += value;
// }

//     return totalSalary;
// }

// console.log(countTotalSalary({mango: 100, poly: 150, alfred: 80}));

/////////////////////////////////////
// const colors = [
//     {hex: "#f44336", rgb: "244,67,54"},
//     {hex: "#2196f3", rgb: "33,150,243"},
//     {hex: "#4caf50", rgb: "76,175,80"},
//     {hex: "#ffeb3b", rgb: "255,235,59"},
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const color of colors) {
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
// }
// console.log(hexColors, rgbColors);

// function getProductPrice(productName) {
//     const products = [
//         {name: "Radar", price: 1300, quantity: 4},
//         {name: "Scanner", price: 2700, quantity: 3},
//         {name: "Droid", price: 400, quantity: 7},
//         {name: "Grip", price: 1200, quantity: 9},
//     ];

//     for (const product of products) {
//         if (product.name === productName) {
//             return product.price;
//         }
//     }
// }

// console.log(getProductPrice("Grip"));


// function getAllPropValues(propName) {
//     const products = [
//         {name: "Radar", price: 1300, quantity: 4},
//         {name: "Scanner", price: 2700, quantity: 3},
//         {name: "Droid", price: 400, quantity: 7},
//         {name: "Grip", price: 1200, quantity: 9},
//     ];
//     const properties = [];

//     if (propName === 'name') {
//         for (const product of products) {
//             properties.push(product.name);
//         }
//     } else if (propName === 'price') {
//         for (const product of products) {
//             properties.push(product.price);
//         }
//     } else if (propName === 'quantity') {
//         for (const product of products) {
//             properties.push(product.quantity);
//             ;
//         }
//     }
//     return properties;
// }

// console.log(getAllPropValues('quantity'));

// function calculateTotalPrice(productName) {
//     const products = [
//         {name: "Radar", price: 1300, quantity: 4},
//         {name: "Scanner", price: 2700, quantity: 3},
//         {name: "Droid", price: 400, quantity: 7},
//         {name: "Grip", price: 1200, quantity: 9},
//     ];

//     for (const product of products) {
//         if (product.name === productName) {
//             return product.price * product.quantity;
//         }
//     }
//     return `Product ${productName} not found!`;
// }

// console.log(calculateTotalPrice('Scanner'));


///////////////////////////////

// const atTheOldToad = {
//     potions: [],

//     getPotions() {
//         return 'List of all available potions';
//     };

//     addPotion(potionName){
//         return `Adding ${potionName}`;
//     };
// };

// const atTheOldToad = {
//     potions: ["Speed potion", "Stone skin"],
//     getPotions() {
//         return this.potions;
//     },
// };

// console.log(atTheOldToad.getPotions());


// const bookShelf = {
//     books: ['The Last Kingdom'],
// };
//
// bookShelf.books.push('The Mist')
//
// console.log(bookShelf.books);

// const bookShelf = {
//     books: ['The Last Kingdom'],
//     getBooks() {
//         return this.books;
//     },
//     addBook(bookName) {
//         this.books.push(bookName);
//     }
// };
//
// console.log(bookShelf.getBooks());
// bookShelf.addBook('The Mist');
// console.log(bookShelf.getBooks());
// ;

// const atTheOldToad = {
//     potions: ["Speed potion", "Stone skin"],
//     getPotions() {
//         return this.potions;
//     },
//     addPotion(potionName) {
//         this.potions.push(potionName);
//     },
// };

// const bookShelf = {
//     books: [
//         {title: 'The Last Kingdom', rating: 8},
//         {title: 'The Mist', rating: 6}
//     ],
//     getBooks() {
//         return this.books;
//     },
//     addBook(newBook) {
//         this.books.push(newBook);
//     },
//     getAverageRating() {
//         let totalRating = 0;
//         for (const book of this.books) {
//             totalRating += book.rating;
//         }
//         return totalRating / this.books.length;
//     },
// };

// bookShelf.addBook({title: 'Dream Guardian', rating: 10});
// console.log(bookShelf.getBooks());
// console.log(bookShelf.getAverageRating());

// const atTheOldToad = {
//     potions: [
//         {name: "Speed potion", price: 460},
//         {name: "Stone skin", price: 520},
//     ],
//     getPotions() {
//         return this.potions;
//     },
//     addPotion(newPotion) {
//         this.potions.push(newPotion);
//     },
//     getTotalPrice() {
//         let totalPrice = 0;
//         for (const potion of this.potions) {
//             totalPrice += potion.price;
//         }
//         return totalPrice;
//     },
// };

// atTheOldToad.addPotion({name: 'Invisibility potion', price: 620});
// atTheOldToad.addPotion({name: 'Power potion', price: 620});
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.getTotalPrice());

// const bookShelf = {
//     books: [
//         {title: 'The Last Kingdom', rating: 8},
//         {title: 'The Mist', rating: 6}
//     ],
//     getBooks() {
//         return this.books;
//     },
//     addBook(newBook) {
//         this.books.push(newBook);
//     },
//     getAverageRating() {
//         let totalRating = 0;
//         for (const book of this.books) {
//             totalRating += book.rating;
//         }
//         return totalRating / this.books.length;
//     },
//     changeRating(bookName, newRating) {
//         for (const book of this.books) {
//             if (book.title === bookName) {
//                 book.rating = newRating;
//             }
//         }
//     }
// };

// bookShelf.addBook({title: 'Dream Guardian', rating: 10});
// bookShelf.changeRating('The Mist', 9);
// console.log(bookShelf.getAverageRating());
// console.log(bookShelf.getBooks());

// const atTheOldToad = {
//     potions: [
//         {name: "Speed potion", price: 460},
//         {name: "Stone skin", price: 520},
//     ],
//     getPotions() {
//         return this.potions;
//     },
//     updatePotionName(oldName, newName) {
//         for (const potion of this.potions) {
//             if (potion.name === oldName) {
//                 potion.name = newName;
//             }
//         }
//     },
// };

// atTheOldToad.updatePotionName("Stone skin", "Invisibility")
// console.log(atTheOldToad.getPotions());

////////////////////////////////////////
// function add(...args) {
//     let sum = 0;
//     for (const arg of args) {
//         sum += arg;
//     }
//     return sum;
// }

// console.log(add(15, 27));
// console.log(add(12, 4, 11, 48));
// console.log(add(32, 6, 13, 19, 8));

// function addOverNum(value, ...args) {
//     let sum = 0;
//     for (const arg of args) {
//         if (arg > value) {
//             sum += arg;
//         }
//     }
//     return sum;
// }

// console.log(addOverNum(50, 15, 27));
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));

// const temps = [14, -4, 25, 8, 11];
// console.log(Math.max(...temps));

//
// function getExtremeScores(scores) {
//     return {best: Math.max(...scores), worst: Math.min(...scores)};
// }

// console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26]));

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScores = Math.max(...allScores);
// const worstScore = Math.min(...allScores);
// console.log(allScores, bestScores, worstScore);


// const first = {propA: 5, propB: 10, propC: 50};
// const second = {propC: 15, propD: 20};

// const third = {...first, ...second};
// console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }

// const fourth = {...second, ...first};
// console.log(fourth); // { propA: 5, propB: 10, propC: 50, propD: 20 }

// const defaultSettings = {
//     theme: "light",
//     public: true,
//     withPassword: false,
//     minNumberOfQuestions: 10,
//     timePerQuestion: 60,
// };
// const overrideSettings = {
//     public: false,
//     withPassword: true,
//     timePerQuestion: 30,
// };

// const finalSettings = {...defaultSettings, ...overrideSettings};
// console.log(finalSettings);