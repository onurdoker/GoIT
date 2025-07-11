// Synchronous code
// console.log("Hello1");
// console.log("Hello2");
// console.log("Hello3");
// console.log("Hello4");

// Asynchronous code
// console.log("Hello5");
// setTimeout(() => {
// 	console.log("Hello6");
// }, 50)                   // adding delay
// console.log("Hello7");

// const button = document.querySelector('button');
// const onClick = () => {
// 	const timerId = setTimeout(() => {
// 		console.log('I love async JS!');
// 	}, 2000);
// 	console.log(timerId);
// };
// button.addEventListener("click", onClick);

// console.log('Hello 1')
// const timerId1 = setTimeout(() => {
// 	console.log('Hello 2')
// }, 2000)
// const timerId2 = setTimeout(() => {
// 	console.log('Hello 3')
// }, 2500)
// clearTimeout(timerId2)
// console.log('Hello 3')

// const setBtn = document.querySelector(".js-set");
// const clearBtn = document.querySelector(".js-clear");
// let timeoutId;

// setBtn.addEventListener('click', () => {
// 	timeoutId = setTimeout(() => {
// 		console.log('I love async JS!');
// 	}, 2000)
// })

// clearBtn.addEventListener('click', () => {
// 	clearTimeout(timeoutId);
// 	console.log(`Timeout with id ${timeoutId} has stopped`);
// });

// const startBtn = document.querySelector(".start-btn");
// startBtn.addEventListener('click', () => {
// 	const intervalId = setInterval(() => {
// 		console.log(`Interval ID: ${intervalId}, ${Math.random()}`);
// 	}, 1000);
// })

// Date and time

// Date class => date obj
// const date = new Date()
// console.log(date)
// console.log(typeof date)

// const date2 = new Date('2030.03.16')
// console.log(date2)

// const date3 = new Date('2030-03-16 14:25:00')
// console.log(date3)

// const date4 = new Date('2030')
// console.log(date4)

// const date5 = new Date('2030/03')
// console.log(date5)

// const date6 = new Date(2030, 2, 16, 14, 25, 0, 0)
// console.log(date6)

// unix time
// console.log(date.getTime())
// console.log(Date.now())
// const date7 = new Date();
// console.log(date7.getTime())

// const startTime = Date.now()

// for (let i = 0; i <= 100; i++) {
// 	console.log(i)
// }
// const endTime = Date.now()
// const elapsedTime = endTime - startTime
// console.log(`Elapsed time: ${elapsedTime} ms`)

// Getter and Setter

// const date = new Date("March 16, 2030 14:25:00");
// console.log("Date: ", date); // "Sat Mar 16 2030 14:25:00 GMT+0200"

// 1 ile 31 arasında günü döndürür
// console.log("Day: ", date.getDate()); // 16

// 0 ile 6 arasında haftanın gününü döndürür, Pazar 0'dır
// console.log("Day of the week: ", date.getDay()); // 6

// 0 ile 11 arasında ayı döndürür
// console.log("Month: ", date.getMonth()); // 2

// 4 haneli yılı döndürür
// console.log("Full year: ", date.getFullYear()); // 2030

// Saati döndürür
// console.log("Hours: ", date.getHours()); // 14

// Dakikaları döndürür
// console.log("Minutes: ", date.getMinutes()); // 25

// Saniyeleri döndürür
// console.log("Seconds: ", date.getSeconds()); // 0

// Milisaniyeleri döndürür
// console.log("Milliseconds: ", date.getMilliseconds()); // 0

// const date2 = new Date("March 16, 2030 14:25:00");

// date2.setMinutes(50);
// console.log(date2); // "Sat Mar 16 2030 14:50:00 GMT+0200"

// date2.setFullYear(2040);
// console.log(date2); // "Fri Mar 16 2040 14:50:00 GMT+0200"

// date2.setMonth(4);
// console.log(date2); // "Wed May16 2040 14:50:00 GMT+0300"

// Promise
// Pending

// Fulfilled - Reject  => Settled

// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		if (isSuccess) {
// 			resolve('Success! Value passed to resolve function');
// 		} else {
// 			reject('Error! Error passed to reject function');
// 		}
// 	}, 2000)
// });
// console.log(promise);
// promise
// 	.then((value) => {
// 		console.log(value);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	})
// 	.finally(() => {
// 		console.log('promise is settled');
// 	})

// const promise = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve(5);
// 	}, 2000);
// });

// promise
// 	.then(value => {
// 		console.log(value);
// 		return value * 2;
// 	})
// 	.then(value => {
// 		console.log(value);
// 		return value * 3;
// 	})
// 	.then(value => {
// 		console.log(value);
// 		return value * 4;
// 	})
// 	.catch(error => {
// 		console.log(error)
// 	})
// 	.finally(() => {
// 		console.log('Finished...');
// 	});

// const fencthUserFromServer = (username, onSuccess, onError) => {
// 	console.log(`Fetching data for: ${username}`);
// };

// fencthUserFromServer(
// 	"mango",
// 	user => console.log(user),
// 	error => console.log(error)
// );

// const fetchUserFromServer = (username, onSuccess, onError) => {
// 	console.log(`Fetching data for ${username}`);
// 	setTimeout(() => {
// 		const isSuccess = false;
//
// 		if (isSuccess) {
// 			onSuccess('Success value');
// 		} else {
// 			onError('Error');
// 		}
// 	}, 2000);
// }

// fetchUserFromServer(
// 	'mango',
// 	user => console.log(user),
// 	error => console.log(error)
// );

// Promisification
// const fetchUserFromServer = username => {
// 	return new Promise((resolve, reject) => {
// 		console.log(`Fetching data for ${username}`);
// 		setTimeout(() => {
// 			const isSuccess = false;
// 			if (isSuccess) {
// 				resolve('Success value');
// 			} else {
// 				reject('Error');
// 			}
// 		}, 2000);
// 	});
// }

// fetchUserFromServer('Mango')
// 	.then(user => console.log(user))
// 	.catch(error => console.log(error));

// new Promise(resolve => resolve('success value'));
// Promise.resolve("success value");

// new Promise((resolve, reject) => reject('error'));
// Promise.reject('error');

// const makeGreeting = (guestName, onSuccess, onError) => {
// 	if (!guestName) {
// 		onError('Guest name must not be empty');
// 	} else {
// 		onSuccess(`Welcome ${guestName}`);
// 	}
// };
// makeGreeting(
// 	'Mango - Greeting1',
// 	greeting => console.log(greeting),
// 	error => console.log(error)
// );

// const makeGreeting2 = guestName => {
// 	return new Promise((resolve, reject) => {
// 		if (!guestName) {
// 			reject('Guest name must not be empty');
// 		} else {
// 			resolve(`Welcome ${guestName}`);
// 		}
// 	})
// }
// makeGreeting2('mango2 - Greeting2')
// 	.then(greeting => console.log(greeting))
// 	.catch(error => console.log(error));


// const makeGreeting3 = guestName => {
// 	if (!guestName) {
// 		return Promise.reject('Guest name must not be empty');
// 	} else {
// 		return Promise.resolve(`Welcome ${guestName}`);
// 	}
// }
// makeGreeting3('mango3 - Greeting3')
// 	.then(greeting => console.log(greeting))
// 	.catch(error => console.log(error));

// multi promise handling

// Promise all
// const p1 = Promise.resolve(12);
// const p2 = Promise.reject(23);
// const p3 = Promise.resolve(45);

// Promise.all([p1, p2, p3])
// 	.then(result => {
// 		console.log(result);
// 	})
// 	.catch(error => {
// 		console.log(error)
// 	});

// Promise.allSettled()
// Promise.allSettled([p1, p2, p3])
// 	.then(result => {
// 		console.log(result);
// 	})

const p1 = new Promise((resolve, reject) => {
	setTimeout(() => resolve(1), 3000);
});
const p2 = new Promise((resolve, reject) => {
	setTimeout(() => reject(2), 2000);
})

Promise.race([p1, p2])
	.then(value => console.log(value))
	.catch(error => console.log(error));























