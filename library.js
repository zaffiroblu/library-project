//Array to hold all the books. Three books are already being displayed.
let myLibrary = [
	{
		title: "World's End",
		author: 'T.C. Boyle',
		pages: 350,
		year: 1987,
		wikiLink: 'https://en.wikipedia.org/wiki/World%27s_End_(Boyle_novel)',
	},
	{
		title: 'The Four Loves',
		author: 'C.S. Lewis',
		pages: 200,
		year: 1960,
		wikiLink: 'https://en.wikipedia.org/wiki/The_Four_Loves',
	},
	{
		title: 'Much Ado About Nothing',
		author: 'William Shakespeare',
		pages: 150,
		year: 1623,
		wikiLink: 'https://en.wikipedia.org/wiki/Much_Ado_About_Nothing',
	},
];

// Constuctor function for the books
function Book(title, author, pages, year, wikiLink) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.year = year;
	this.wikiLink = wikiLink;
}

//-------------------------------

//Now I want to create a new card for each item in the array.
const pageBody = document.getElementById('page-body');

function displayCards() {
	for (let i = 0; i < myLibrary.length; i++) {
		let newCardDiv = createCard(i);
		fillCard(i, newCardDiv);
	}
	// OLD CODE:
	// let allCards = document.querySelectorAll('.card');
	// for (let j = 0; j < allCards.length; j++) {
	// 	fillCard(j, allCards[j]);
	// }
}

displayCards();

function createCard(indexCount) {
	let cardDiv = document.createElement('div');
	cardDiv.classList.add('card');
	cardDiv.setAttribute('style', 'width: 18rem');
	cardDiv.setAttribute('data-id', indexCount);

	let cardBody = document.createElement('div');
	cardBody.classList.add('card-body');
	cardBody.setAttribute('data-id', indexCount);

	let cardTitle = document.createElement('h5');
	cardTitle.classList.add('card-title', 'title-display');
	cardBody.appendChild(cardTitle);

	let cardAuthor = document.createElement('h6');
	cardAuthor.classList.add(
		'card-subtitle',
		'mb-2',
		'text-muted',
		'author-display'
	);
	cardBody.appendChild(cardAuthor);

	let cardYear = document.createElement('h6');
	cardYear.classList.add(
		'card-subtitle',
		'mb-2',
		'text-muted',
		'year-display'
	);
	cardBody.appendChild(cardYear);

	let cardPages = document.createElement('h6');
	cardPages.classList.add(
		'card-subtitle',
		'mb-2',
		'text-muted',
		'pages-display'
	);
	cardBody.appendChild(cardPages);

	let cardWiki = document.createElement('a');
	cardWiki.classList.add(
		'card-subtitle',
		'mb-2',
		'text-muted',
		'wiki-display'
	);
	cardBody.appendChild(cardWiki);

	let readToggle = document.createElement('div');
	readToggle.classList.add('form-check', 'form-switch');

	let inputToggle = document.createElement('input');
	inputToggle.classList.add('form-check-input');
	inputToggle.setAttribute('type', 'checkbox');
	inputToggle.setAttribute('role', 'switch');
	inputToggle.setAttribute('id', 'flexSwitchCheckDefault');
	inputToggle.setAttribute('onclick', 'changeColor(' + indexCount + ')');

	let labelToggle = document.createElement('label');
	labelToggle.classList.add('form-check-label');
	labelToggle.setAttribute('for', 'flexSwitchCheckDefault');
	labelToggle.textContent = 'I have read this book';

	readToggle.appendChild(inputToggle);
	readToggle.appendChild(labelToggle);
	cardBody.appendChild(readToggle);

	let deleteButton = document.createElement('button');
	deleteButton.classList.add('btn', 'btn-outline-primary');
	deleteButton.setAttribute('type', 'button');
	deleteButton.setAttribute('data-id', indexCount);
	deleteButton.setAttribute('onclick', 'deleteItem(' + indexCount + ')');
	deleteButton.textContent = 'Delete';

	cardBody.appendChild(deleteButton);

	cardDiv.appendChild(cardBody);

	pageBody.appendChild(cardDiv);

	return cardDiv;
}

function fillCard(indexCount, cardElement) {
	let titleDisplay = cardElement.querySelector('.title-display');
	titleDisplay.textContent = myLibrary[indexCount].title;

	let authorDisplay = cardElement.querySelector('.author-display');
	authorDisplay.textContent = myLibrary[indexCount].author;

	let yearDisplay = cardElement.querySelector('.year-display');
	yearDisplay.textContent = myLibrary[indexCount].year;

	let pagesDisplay = cardElement.querySelector('.pages-display');
	pagesDisplay.textContent = myLibrary[indexCount].pages;

	let wikiDisplay = cardElement.querySelector('.wiki-display');
	wikiDisplay.textContent = 'Wiki Link';
	wikiDisplay.href = myLibrary[indexCount].wikiLink;
}

// This function is called each time the "add" button is pushed.
function addBookToLibrary() {
	let titleInput = document.querySelector('#title-input').value;
	let authorInput = document.querySelector('#author-input').value;
	let yearInput = document.querySelector('#year-input').value;
	let pagesInput = document.querySelector('#pages-input').value;
	let wikiInput = document.querySelector('#wiki-input').value;

	let newUserBook = new Book(
		titleInput,
		authorInput,
		yearInput,
		pagesInput,
		wikiInput
	);

	myLibrary.push(newUserBook);
	let allCards2 = document.querySelectorAll('.card');
	allCards2.forEach((card) => {
		card.remove();
	});
	displayCards();
}

// This function is called when a "delete" button is clicked:
function deleteItem(indexNumber) {
	myLibrary.splice(indexNumber, 1);
	let allCards3 = document.querySelectorAll('.card');
	allCards3.forEach((card) => {
		card.remove();
	});
	displayCards();
}

// This function is called when the "read" toggle for an item has been clicked:
function changeColor(indexNumber) {
	let cardToChange = document.querySelector(
		'.card-body[data-id="' + indexNumber + '"]'
	);
	cardToChange.classList.toggle('dark-background');
}

// Old bits of code

// cardWiki.setAttribute('data-id', count);
