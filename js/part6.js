// const user = {
// 	username: 'Victor',
// 	showName() {
// 		console.log(user.username);
// 	}
// }
// user.showName();

// const user = {
// 	username: 'Victor',
// 	showName() {
// 		console.log(this.username);
// 	}
// }
// user.showName();

// const pizzaPalace = {
// 	pizzas: ["Supercheese", "Smoked", "Four meats"],
// 	checkPizza(pizzaName) {
// 		return this.pizzas.includes(pizzaName);
// 	},
// 	order(pizzaName) {
// 		const isPizzaAvailable = this.checkPizza(pizzaName);
//
// 		if (!isPizzaAvailable) {
// 			return `Sorry, there is no pizza named «${pizzaName}»`;
// 		}
//
// 		return `Order accepted, preparing «${pizzaName}» pizza`;
// 	},
// };
// console.log(pizzaPalace.order("Smoked"));

// 'use strict'
// function foo() {
// 	console.log(this);
// }
// foo()

// const user = {
// 	username: 'Poly',
// 	showThis() {
// 		console.log(this);
// 	}
// }
// user.showThis();

// 'use strict';
// function showTime() {
// 	console.log('this in showThis: ', this)
// }
// showTime()

// 'use strict';
// function showThis() {
// 	console.log('This is showThis: ', this);
// }
// const user = {
// 	username: 'Poly'
// };
// user.showContext = showThis;
// user.showContext();
// showThis();

//-----------------------------------------
// Call Method
// foo.call(thisArg, arg1, arg2, ...)

// function greet(str) {
// 	console.log(`${str}, ${this.username}, your room is ${this.room}!`);
// }
//
// const mango = {
// 	username: 'Mango',
// 	room: 27
// }
// const poly = {
// 	username: 'Poly',
// 	room: 191
// }
// greet.call(mango, 'Welcome');
// greet.call(poly, 'Hello');

// function showName() {
// 	console.log(this.name);
// }
// const user = {
// 	name: 'Alice'
// }
// showName.call(user)

// function greet(name) {
// 	console.log(`Hello, ${name}! I am ${this.person}`);
// }
// const person = 'John';
// const context = {
// 	person: 'Alice'
// }
// greet.call(context, 'Bob');

//---------------------------------------
// Apply Method
// foo.apply(thisArg, [arg1, arg2, ...])

// function greet(str) {
// 	console.log(`${str}, ${this.username}, your room is ${this.room}!`);
// }
// const mango = {
// 	username: 'Mango',
// 	room: 27
// }
// const poly = {
// 	username: 'Poly',
// 	room: 191
// }
// greet.apply(mango, ['Welcome']);
// greet.apply(poly, ['Hello']);

//-----------------------------------------
// Bind Method
// foo.bind(thisArg, arg1, arg2, ...)

// 'use strict';
// const customer = {
// 	username: 'Jacob',
// 	sayHello() {
// 		console.log(`Hello, ${this.username}!`)
// 	}
// }
// customer.sayHello();
// const greet = customer.sayHello.bind(customer);
// greet()

// function sayHello(greeting) {
// 	console.log(`${greeting}, ${this.name}!`)
// }
// const user = {
// 	name: 'Alice'
// }
// const greet = sayHello.bind(user);
// greet('Hello');

// 'use strict';
// const customer = {
// 	firstName: 'Jacob',
// 	lastName: 'Mercer',
// 	getFullName() {
// 		return `${this.firstName} ${this.lastName}`;
// 	}
// };
// function makeMessage(callback) {
// 	const username = callback();
// 	console.log(`Processing an application from ${username}`)
// }
// makeMessage(customer.getFullName);

// const customer = {
// 	firstName: 'Jacob',
// 	lastName: 'Mercer',
// 	getFullName() {
// 		return `${this.firstName} ${this.lastName}`;
// 	}
// };
// function makeMessage(callback) {
// 	const username = callback();
// 	console.log(`Processing an application from ${username}`)
// }
// makeMessage(customer.getFullName.bind(customer));

// const library = {
// 	books: 1923,
// 	logBookCount() {
// 		console.log(this.books);
// 	}
// }
// const showBooks = library.logBookCount.bind(library);
// showBooks();

// -------------------------------------------------
// Arrow Functions
// const showThis = () => {
// 	console.log('this in showThis: ', this);
// }
// showThis();

// const showThis = () => {
// 	console.log('this os showThis: ', this)
// }
// const user = {
// 	username: 'Mango'
// }
// user.showContext = showThis
// user.showContext()

// const hotel = {
// 	username: 'Resort hotel',
// 	showThis() {
// 		const foo = () => {
// 			console.log('this in foo: ', this)
// 		}
// 		foo()
// 		console.log('this in showThis: ', this)
// 	}
// }
// hotel.showThis()

//////////////////////////////////////////////////
// Prototypes
// const animal = {
// 	legs: 4
// }
// const dog = Object.create(animal);
// dog.name = 'Mango'
// console.log(dog.legs)

// const parent = {
// 	name: 'Stacey',
// 	surname: 'Moore',
// 	age: 54,
// 	heritage: 'Irish',
// }
// const child = Object.create(parent)
// child.name = 'Jason'
// child.age = 27
// console.log(parent.hasOwnProperty('surname'))
// console.log(child.hasOwnProperty('surname'))

// const customer = {
// 	username: 'jacob'
// }
// const animal = {
// 	legs: 4
// }
// const dog = Object.create(animal)
// dog.name = 'Mango'
// console.log(dog)
// console.log(animal.isPrototypeOf(dog))
// console.log(animal.isPrototypeOf(animal))
// console.log(dog.isPrototypeOf(animal))
// console.log(customer.isPrototypeOf(animal))
// for (const key in dog) {
// 	if (dog.hasOwnProperty(key)) {
// 		console.log(key)
// 	}
// }

// const objC = {c: 'objC prop'}
// const objB = Object.create(objC)
// objB.b = 'objB prop'
//
// const objA = Object.create(objB)
// objA.a = 'objA prop'
// console.log(objA)

// const apartment = {
// 	rooms: 4,
// 	floor: 2,
// 	taxfree: false
// }
// const condo = Object.create(apartment);
// condo.rooms = 3;
// console.log(condo.rooms)

// const ancestor = {
// 	name: 'Paul',
// 	age: 83,
// 	surname: 'Dawson',
// 	heritage: 'Irish',
// }
// const parent = Object.create(ancestor)
// parent.name = 'Stacey'
// parent.surname = 'Moore'
// parent.age = 54
// const child = Object.create(parent)
// child.name = 'Jason'
// child.age = 27
// console.log(parent)
// console.log(ancestor.isPrototypeOf('parent'))
// console.log(parent.isPrototypeOf('child'))
// console.log(ancestor.hasOwnProperty('surname'))

/////////////////////////////////////////////////////////////////////
// OOP  - Object Oriented Programming

// const baseSalary = 3000
// const overtime = 10
// const rate = 20
// const getWage = (baseSalary, overtime, rate) => {
// 	return baseSalary + overtime * rate
// }
// getWage(baseSalary, overtime, rate)

// const employee = {
// 	baseSalary: 30000,
// 	overtime: 10,
// 	rate: 20,
// 	getWage() {
// 		return this.baseSalary + this.overtime * this.rate;
// 	}
// }
// console.log(employee.getWage())

//////////////////////////////////////////////////
// Class

// class User {
// 	// sinifin govdesi
// }
// const mango = new User()
// console.log(mango)
// const poly = new User()
// console.log(poly)

// class User {
// 	constructor(name, email) {
// 		console.log(name, email);
// 		this.name = name;
// 		this.email = email;
// 	}
// }
// const mango = new User('Mango', 'mango@mail.com')
// console.log(mango)
// const poly = new User('Poly', 'poly@mail.com')
// console.log(poly)


// class Car {
// 	constructor(brand, model, price) {
// 		this.brand = brand;
// 		this.model = model;
// 		this.price = price;
// 	}
// }
// const araba1 = new Car('Audi', 'Q3', 36000)
// console.log(araba1)
// const araba2 = new Car('BMW', 'X5', 58900)
// console.log(araba2)
// const araba3 = new Car('Nissan', 'Murano', 31700)
// console.log(araba3)

// class User {
// 	constructor(params) {
// 		this.name = params.name;
// 		this.email = params.email;
// 	}
// }
// const mango = new User({
// 	name: 'Mango',
// 	email: 'mango@mail.com'
// })
// console.log(mango)

// class Car {
// 	constructor(params) {
// 		this.brand = params.brand;
// 		this.model = params.model;
// 		this.price = params.price;
// 	}
// 	getPrice() {
// 		return this.price;
// 	}
// 	changePrice(newPrice) {
// 		this.price = newPrice;
// 	}
// }

// class User {
// 	constructor({name, email}) {
// 		this.name = name;
// 		this.email = email;
// 	}
// 	getEmail() {
// 		return this.email;
// 	}
// 	changeEmail(newEmail) {
// 		this.email = newEmail;
// 	}
// }

// const mango = new User({
// 	name: 'Mango',
// 	email: 'mango@mail.com'
// })
// console.log(mango.getEmail());
// mango.changeEmail('new@mail.com')
// console.log(mango.getEmail());

// class User {
// 	name
// 	#email
// 	constructor({name, email}) {
// 		this.name = name;
// 		this.#email = email;
// 	}
// }
// const mango = new User({
// 	name: 'Mango',
// 	email: 'mango@mail.com',
// })
// console.log(mango.name) //mango
// console.log(mango.email) //undefined

// class User {
// 	name;
// 	#email;
// 	constructor({name, email}) {
// 		this.name = name;
// 		this.#email = email;
// 	}
// 	getEmail() {
// 		return this.#email;
// 	}
// 	changeEmail(newEmail) {
// 		this.#email = newEmail;
// 	}
// }
// const mango = new User({
// 	name: "Mango",
// 	email: 'mango@mail.com',
// });
// console.log(mango.getEmail()); //mango@mail.com
// mango.changeEmail('mango@supermail.com')
// console.log(mango.getEmail()); // mango@supermail.com

// class Car {
// 	#brand;
// 	modal;
// 	price;
// 	constructor(params) {
// 		this.#brand = params.#brand;
// 		this.modal = params.modal;
// 		this.price = params.price;
// 	}
// 	getBrand() {
// 		return this.#brand;
// 	}
// 	changeBrand(newBrand) {
// 		this.#brand = newBrand;
// 	}
// 	getPrice() {
// 		return this.price;
// 	}
// 	changePrice(newPrice) {
// 		this.price = newPrice;
// 	}
// }
// const car1 = new Car({
// 	brand: 'Audi',
// 	model: 'Q3',
// 	price: 36000,
// });
// car1.changeBrand('Honda')
// console.log(car1);

// class User {
// 	name;
// 	#email;
// 	constructor({name, email}) {
// 		this.name = name;
// 		this.#email = email;
// 	}
// 	getEmail() {
// 		return this.#email;
// 	}
// 	changeEmail(newEmail) {
// 		if (this.#validateEmail(newEmail)) {
// 			this.#email = newEmail;
// 		} else {
// 			console.log('Invalid email format');
// 		}
// 	}
// 	#validateEmail(email) {
// 		return email.includes('@');
// 	}
// }
// const mango = new User({
// 	name: 'mango',
// 	email: 'mango@mail.com',
// })
// mango.changeEmail('newmail.com')
// mango.changeEmail('mango@newmail.com')
// console.log(mango.getEmail())

// class User {
// 	#email;
// 	constructor({name, email}) {
// 		this.name = name;
// 		this.#email = email;
// 	}
// 	//getter email
// 	get email() {
// 		return this.#email;
// 	}
// 	// setter email
// 	set email(newEmail) {
// 		this.#email = newEmail;
// 	}
// }
// const mango = new User({
// 	name: 'Mango',
// 	email: 'mango@mail.com'
// });
// console.log(mango.email); //mango@mail.com
// mango.email = 'mango@supermail.com'
// console.log(mango.email)

// class Car {
// 	#brand;
// 	#model;
// 	#price;
// 	constructor(params) {
// 		this.#brand = params.brand;
// 		this.#model = params.model;
// 		this.#price = params.price;
// 	}
// 	get brand() {
// 		return this.#brand;
// 	}
// 	set brand(newBrand) {
// 		this.#brand = newBrand;
// 	}
// 	get model() {
// 		return this.#model;
// 	}
// 	set model(newModel) {
// 		this.#model = newModel;
// 	}
// 	get price() {
// 		return this.#price;
// 	}
// 	set price(newPrice) {
// 		this.#price = newPrice;
// 	}
// }


// class MyClass {
// 	static myProp = 'value';
// }
// console.log(MyClass.myProp);

// class User {
// 	static roles = {
// 		admin: 'admin',
// 		editor: 'editor',
// 		basic: 'basic',
// 	};
// 	#email;
// 	#role;
// 	constructor({email, role = User.roles.basic}) {
// 		this.#email = email;
// 		this.#role = role;
// 	}
// 	get role() {
// 		return this.#role;
// 	}
// 	set role(newRole) {
// 		this.#role = newRole;
// 	}
// }
// const mango = new User({
// 	email: 'mango@mail.com',
// 	role: User.roles.admin,
// })
// console.log(mango.role);
// mango.role = User.roles.editor;
// console.log(mango.role);

// class MyClass {
// 	static b = 5;
// 	constructor(value) {
// 		this.a = value;
// 	}
// }
// const instance = new MyClass(10);
// console.log(instance.b); //undefined

// class Car {
// 	static maxPrice = 50000;
// 	#price
// 	constructor(params) {
// 		this.#price = params.price;
// 	}
// 	get price() {
// 		return this.#price;
// 	}
// 	set price(newPrice) {
// 		if (newPrice <= Car.maxPrice) {
// 			this.#price = newPrice;
// 		}
// 	}
// }
// const audi = new Car({price: 35000});
// console.log(audi.price); // 35000
// audi.price = 49000;
// console.log(audi.price); // 49000
// audi.price = 51000;
// console.log(audi.price); // 49000

// class MyClass {
// 	static myMethod() {
// 		console.log("A Static Method");
// 	}
// }
// MyClass.myMethod();

// class User {
// 	static #takenEmails = [];
// 	static isEmailTaken(email) {
// 		return User.#takenEmails.includes(email);
// 	}
// 	#email;
// 	constructor({email}) {
// 		this.#email = email;
// 		User.#takenEmails.push(email);
// 	}
// }
// const mango = new User({email: 'mango@mail.com'});
// console.log(User.isEmailTaken('poly@mail.com'));
// console.log(User.isEmailTaken('mango@mail.com'));


// class Car {
// 	static #maxPrice = 50000;
// 	static checkPrice(price) {
// 		if (price > this.#maxPrice) {
// 			return "Error! Price exceeds the maximum"
// 		} else {
// 			return "Success! Price is within acceptable limits"
// 		}
// 	}
// 	constructor(params) {
// 		this.price = params.price;
// 	}
// }
// const audi = new Car({price: 36000});
// const bmw = new Car({price: 64000});
// console.log(Car.checkPrice(audi.price));
// console.log(Car.checkPrice(bmw.price));

// class User {
// 	#email;
// 	constructor(email) {
// 		this.#email = email;
// 	}
// 	get email() {
// 		return this.#email;
// 	}
// 	set email(newEmail) {
// 		this.#email = newEmail;
// 	}
// }
// class ContentEditor extends User {
// }
// const editor = new ContentEditor('mango@mail.com')
// console.log(editor);
// console.log(editor.email);

// class User {
// 	constructor(email) {
// 		this.email = email;
// 	}
// 	get email() {
// 		return this.email;
// 	}
// 	set email(newEmail) {
// 		this.email = newEmail;
// 	}
// }
// class Admin extends User {
// 	static role = {
// 		BASIC: 'basic',
// 		SUPERUSER: 'superuser'
// 	};
// }
// console.log(Admin.role.BASIC)
// console.log(Admin.role.SUPERUSER)

// class User {
// 	#email;
// 	constructor(email) {
// 		this.#email = email;
// 	}
// 	get email() {
// 		return this.#email;
// 	}
// 	set email(newEmail) {
// 		this.#email = newEmail;
// 	}
// }
// class ContentEditor extends User {
// 	constructor({email, posts}) {
// 		super(email);
// 		this.posts = posts;
// 	}
// }
// const editor = new ContentEditor({
// 	email: 'mango@mail.com',
// 	posts: []
// })
// console.log(editor);
// console.log(editor.email);

class User {
	email;

	constructor(email) {
		this.email = email;
	}

	get email() {
		return this.email;
	}

	set email(newEmail) {
		this.email = newEmail;
	}
}

class Admin extends User {
	static role = {
		BASIC: 'basic', SUPERUSER: 'superuser',
	}

	constructor({email, access}) {
		super(email);
		this.access = access;
	}
}

const mango = new Admin({
	email: 'mango@mail.com', access: Admin.role.BASIC,
})
console.log(mango.email);
console.log(mango.access);






















