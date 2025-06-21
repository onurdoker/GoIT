// DOM
// const listWithId = document.querySelector('#menu');
// listWithId.style.textTransform = 'uppercase';
// listWithId.style.fontSize = '24px';
// console.log(listWithId)

// const listWithClass = document.querySelector('.menu')
// console.log(listWithClass)

// const menuItemsbyCLass = document.querySelectorAll('.menu-item');
// console.log(menuItemsbyCLass)

// console.log(document)

// const body = document.body;
// console.log(body)

// const list = document.querySelector('.list');
// console.log(list);

// const firstListItem = list.firstElementChild;
// console.log(firstListItem);

// const lastListItem = list.lastElementChild;
// console.log(lastListItem);

// const listItems = list.children;
// console.log(listItems);

// const link = document.querySelector('.link');
// console.log(link.classList);

// const hasActiveClass = link.classList.contains('is-active');
// console.log(hasActiveClass);

// link.classList.add('special');
// console.log(link.classList);

// link.classList.remove('is-active');
// console.log(link.classList);

// link.classList.toggle('is-active');
// console.log(link.classList);

// link.classList.toggle('is-active');
// console.log(link.classList);

// link.classList.replace('is-active', 'regular');
// console.log(link.classList);

// const image = document.querySelector('.image');
// console.log(image.hasAttribute('src'));
// console.log(image.hasAttribute('href'));
// console.log(image.getAttribute('alt'));

// image.setAttribute('alt', 'Amazing nature');
// console.log(image.getAttribute('alt'));

// image.removeAttribute('alt');
// console.log(image.getAttribute('alt'));

// const saveBtn = document.querySelector('button[data-action="save"]');
// console.log(saveBtn.dataset.action);

// const closeBtn = document.querySelector('button[data-action="close"]');
// console.log(closeBtn.dataset.action);

// const saveBtn = document.querySelector('.editor button[data-action="save"]');
// const closeBtn = document.querySelector('.editor button[data-action="close"]');
// console.log(saveBtn.dataset.action);
// console.log(closeBtn.dataset.action);

// saveBtn.dataset.action = 'update';
// console.log(saveBtn.dataset.action);

// saveBtn.dataset.role = 'admin';
// console.log(saveBtn.dataset.role);

// delete saveBtn.dataset.role;
// console.log(saveBtn.dataset.role);

// const userBlock = document.querySelector('div[data-user-role="admin"]');
// element.dataset.userStatus = 'online';

// const heading = document.createElement("h1");
// heading.classList.add('title');
// heading.textContent = 'This is a heading';
// console.log(heading);

// const image = document.createElement('img');
// image.src = 'https://picsum.photos/id/11/320/240';
// image.alt = 'Nature';
// console.log(image);

// const list = document.querySelector('.usernames');
//Adds an item to the end of the list
// const lastItem = document.createElement('li');
// lastItem.textContent = 'Poly';
// list.append(lastItem);

// const firstItem = document.createElement('li');
// firstItem.textContent = 'Ajax';
// list.prepend(firstItem)

// const text = document.querySelector('.text');
// text.remove();

// const article = document.querySelector(('.article'));
// console.log(article.innerHTML);

// const title = document.querySelector('.title');
// title.innerHTML = "New and <span class='accent'>improved</span> title"

// const technologies = ['HTML', 'CSS', 'JavaScript', 'Java', 'React'];
// const list = document.querySelector('.list');
// const markup = technologies.map((technology) => `<li class="list=item">${technology}</li>`).join('');
// console.log(markup);
// list.innerHTML = markup;

// const article = document.querySelector('.article');
// const htmlString = `<p class="article-text">Nullam quis ante. Vestibulum dapibus nunc ac augue. In consectetuer turpis ut velit.</p>
// <a class="link" href="#">Read more...</a>`;
// article.innerHTML += htmlString;
// const content = article.innerHTML;
// console.log(content);

//element.insertAdjacentHTML(position, string)

// const list = document.querySelector('.list');
// const newTechonologies = ['React', 'TypeScript', 'Node.js'];
// const markup = newTechonologies.map((technology) => `<li class = "list-item new">${technology}</li>`).join('');

// list.insertAdjacentHTML('beforeend', markup);
// list.insertAdjacentHTML('beforebegin, '<h2>Popular technologies');


// const button = document.querySelector('.my-button');
// const handleClick = () => {
// 	console.log('The button was pressed and now the next image will appear');
// };
// button.addEventListener('click', handleClick);

// const singleBtn = document.querySelector('#single');
// const handleClick = () => {
// 	console.log('click event listener callback');
// };
// singleBtn.addEventListener('click', handleClick);

// const multipleBtn = document.querySelector('#multiple');
// const firstCallBack = () => {
// 	console.log('First callback!');
// };
// const secondCallBack = () => {
// 	console.log('Second callback!');
// };
// const thirdCallBack = () => {
// 	console.log('Third callback!');
// };
// multipleBtn.addEventListener('click', firstCallBack);
// multipleBtn.addEventListener('click', secondCallBack);
// multipleBtn.addEventListener('click', thirdCallBack);

// const button = document.querySelector('.btn');
// const handleClick = (event) => {
// 	console.log('event: ', event);
// 	console.log('event type: ', event.type);
// 	console.log('currentTarget: ', event.currentTarget);
// };
// button.addEventListener('click', handleClick);

// document.addEventListener('keydown', event => {
// 	console.log('keydown: ', event);
// })
// document.addEventListener('keyup', event => {
// 	console.log('keyups: ', event);
// })

const registerForm = document.querySelector('.form');
registerForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
	event.preventDefault();
	// const form = event.target;
	// const login = form.elements.login.value;
	const login = event.target.elements.login.value;
	// const password = form.elements.password.value;
	const password = event.target.elements.password.value;

	if (login === '' || password === '') {
		return console.log('Please fill in all the fields');
	}
	;

	console.log(`login: ${login}, Password: ${password}`);
	form.reset();

}






















