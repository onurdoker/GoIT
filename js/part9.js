// JSON JavaScript Object Notation

// Number
//String
//Boolean
//Null


// undefined - nope
// function - nope

// const dog = {
// 	name: "Mango",
// 	age: 3,
// 	isGoodBoy: true,
// 	sayHi() {
// 		console.log('Hi')
// 	}
// };

// const json = JSON.stringify(dog);
// console.log(json); // '{"name":"Mango","age":3,"isGoodBoy":true}'

// const json = JSON.stringify(85);
// console.log(typeof json);
// console.log(json);

// const json2 = JSON.stringify(() => 5);
// console.log(json2); //undefined

// const json = JSON.stringify(true);
// console.log(typeof json);
// console.log(json);

// const dog2 = JSON.parse(json);
// console.log(dog2);

// const json2 = JSON.parse('{"username": "john doe"}');
// console.log(json2); //undefined

// const json2 = JSON.parse(85);
// console.log(json2); //85
// const json2 = JSON.parse('true');
// console.log(json2); //true

// try {
// 	const dog2 = JSON.parse('welcome');
// } catch (error) {
// 	// console.log('where was an error');
// }
// console.log('artik gormeliyim');

// Cookies

// console.log(localStorage)
// console.log(sessionStorage)

// localStorage.setItem('myFirstLocalItem', 'value123')
// localStorage.setItem('mySecondLocalItem', 'value345')

// console.log(localStorage)

// const myLocalItem = localStorage.getItem('mySecondLocalIte')
// console.log(myLocalItem)

// const settings = {
// 	theme: "dark",
// 	isAuth: true,
// 	options: [1, 2, 3]
// }

// JSON.stringify(settings)

// localStorage.setItem('userSettings', JSON.stringify(settings))

// const userPreferences = localStorage.getItem('userSettings')
// const parsedSettings = JSON.parse(userPreferences)
// console.log(parsedSettings.theme)

// localStorage.setItem("ui-theme", "light");

// console.log(window.localStorage);

// localStorage.removeItem('userSettings');
// localStorage.clear();

// const form = document.querySelector('.feedback-form')
// const textarea = form.elements.message
// const localStorageKey = 'GoIT-example-message'

// cachedValue = localStorage.getItem(localStorageKey)
// 	? localStorage.getItem(localStorageKey)
// 	: 'default value';

// textarea.value = cachedValue
// form.addEventListener('input', (evt) => {
// 	localStorage.setItem(localStorageKey, evt.target.value)
// })

// form.addEventListener('submit', evt => {
// 	evt.preventDefault();
// 	console.log(evt.target.elements.message.value)
// 	localStorage.removeItem(localStorageKey)
// 	form.reset()
// })

// nodejs is a JS runtime
// npm (nade package manager)

// Backward compatibility












