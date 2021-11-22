// import { booksData } from "./booksData.js";
const booksData = [];

const allbooksContainer = document.querySelector('.books-container');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const addBtn = document.querySelector('#add-btn');

const CreateBookElement = () => {
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
  
  bookTitle.textContent = booksData[booksData.length - 1].title;
  bookAuthor.textContent = booksData[booksData.length - 1].author;
}

const AddBook = () => {
  function book (title, author) {
    this.title = title;
    this.author = author;
  }

  addBtn.addEventListener('click', (e) => {
    if (titleInput.value === '' || authorInput.value === '') {
      e.preventDefault();
    } else {
      let neWbook = new book(titleInput.value, authorInput.value);
      booksData.push(neWbook);
      titleInput.value = '';
      authorInput.value = '';
      CreateBookElement();
      removeBook();
    }
  });
}

function delbook() {
  booksData.filter(book => book);
}

const removeBook = () => {
  const removeBtns = document.querySelectorAll('.remove-btn');
  removeBtns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      btn.parentElement.remove();
    });
  });
  
}

AddBook();


