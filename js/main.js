// import { booksData } from "./booksData.js";
const allbooksContainer = document.querySelector('.books-container');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const addBtn = document.querySelector('#add-btn');
let booksData = [];

function bookDetails(title, author) {
  this.title = title;
  this.author = author;
}


const removeBook = (removeBtn, book) => {
  removeBtn.addEventListener('click', () => {
    removeBtn.parentElement.remove();
    removeFromCollection(book);
    storeBooksInLocal();
  });
}

const createElement = (book) => {
  const bookContainer = document.createElement('article');
  const bookTitle = document.createElement('h4');
  const bookAuthor = document.createElement('h5');
  const removeBtn = document.createElement('button');
  
  allbooksContainer.append(bookContainer);
  bookContainer.classList.add('book-info-conatiner');
  bookContainer.append(bookTitle, bookAuthor, removeBtn);
  bookTitle.classList.add('title-book');
  bookAuthor.classList.add('author-book');
  removeBtn.classList.add('remove-btn');
  removeBtn.textContent = 'Remove';
  
  bookTitle.textContent = book.title;
  bookAuthor.textContent = book.author;
  removeBook(removeBtn,book);
  console.log('here')
}

const addBook = () => {
  addBtn.addEventListener('click', (e) => {
    if (titleInput.value === '' || authorInput.value === '') {
      e.preventDefault();
    } else {
      let book = new bookDetails(titleInput.value, authorInput.value);
      booksData.push(book);
      createElement(book);
      storeBooksInLocal();
      titleInput.value = '';
      authorInput.value = '';
    }
  })
}

const removeFromCollection = (book) => {
  let newData = booksData.filter((element) => element !== book);
  booksData = newData;
}

const storeBooksInLocal = () => {
  localStorage.setItem('books', JSON.stringify(booksData));
}

const getBooksFromLocal = () => {
  let retrievedBooks = JSON.parse(localStorage.getItem('books'));
  booksData = retrievedBooks;
}

window.addEventListener('load', () => {
  getBooksFromLocal();
  booksData.forEach((book) => {
    createElement(book);
  })
})
addBook();

