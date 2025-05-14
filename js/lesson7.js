// function foo(array) {
//   for(let i =0; i < array.length; i++) {
//     array[i] *= 2
//   }
// }

// const numbers = [1, 2, 3, 4, 5];
// foo(numbers);
// console.log(numbers);

// key value pair
// title field
// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   public: true,
//   rating: 8.38,
//   comments: {
//   }
// };

// console.log(book);

// const user = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   hobbies: ['swimming', 'music', 'sci-fi'],
//   location: {
//     country: 'Jamaica',
//     city: 'Ocho Rios',
//   },
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };


// dot notation
// console.log(user.name)
// console.log(user.stats)
// console.log(user.hobbies[0])

// bracket notation
// console.log(user['location'])
// const title = 'book title';
// const author = 'my author';

const book = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  public: true,
  rating: 8.38,
};

// book.rating = 9;
// book.isPublic = false;
// book.genres.push('drama');
// book.country = 'Jamaica';
// // console.log(book);
// // console.log(book.rating);
// // console.log(book.isPublic);
// // console.log(book.genres);
// console.log(book.country);

// const book2 = {
//   title: title,
//   author: author,
//   genres: ['historical prose', 'adventure'],
//   public: true,
//   rating: 8.38,
// };
// console.log(book2);

// const propName = 'name';
// const user = {
//   age: 25,
// };

// user[propName] = 'Henry Sibola';
// console.log(user.name)

//arraylerde
// for(const myNumber of myNumbers){
// }

// for (const key in book){
//   console.log(key);
//   console.log(book[key]);
//   console.log(book.key); // undefined
// }

const apartment = {
    descr: 'Spacóus apartment in the city center',
    rating: 4,
    proce: 2153,
}

// const keys = [];
// const values = [];

// for (const key in apartment) {
//     keys.push(key);
//     values.push(apartment[key]);
// }
// console.log(keys);
// console.log(values);

// const keys = Object.keys(book);
// console.log(keys);

// for (const key of keys) {
//     console.log(key);
//     console.log(book[key]);
// }

// const values = Object.values(book);
// console.log(values);

// for (const value of values) {
//     console.log(typeof value);
// }

// const values = [];
// const keys = Object.keys(apartment);

// for (const key of keys) {
//     values.push(apartment[key]);
// }
// console.log(values);

// const values2 = Object.values(apartment);
// console.log(values2);