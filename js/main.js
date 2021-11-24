const allbooksContainer = document.querySelector('.books-container');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const addBtn = document.querySelector('#add-btn');

class BookDetails { /*eslint-disable*/
  constructor(title, author) {/*eslint-disable*/
    this.title = title;  /*eslint-disable*/
    this.author = author; /*eslint-disable*/
  }
}/*eslint-disable*/
  class Library {
  constructor() {
    this.booksData = [];
  }
  
  removeFromCollection(book) {
    const newData = this.booksData.filter((element) => element !== book);
    this.booksData = newData;
  }
  
  getBooksFromLocal() {
    const retrievedBooks = JSON.parse(localStorage.getItem('books'));
    this.booksData = retrievedBooks;
  }
  
  storeBooksInLocal() {
    localStorage.setItem('books', JSON.stringify(this.booksData));
  }
  
  removeBook(removeBtn, book) {
    removeBtn.addEventListener('click', () => {
      removeBtn.parentElement.remove();
      this.removeFromCollection(book);
      this.storeBooksInLocal();
    });
  }
  
  createElement(book) {
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
    this.removeBook(removeBtn, book);
  }
  
  addBook() {
    addBtn.addEventListener('click', (e) => {
      if (titleInput.value === '' || authorInput.value === '') {
        e.preventDefault();
      } else {
        const book = new BookDetails(titleInput.value, authorInput.value);
        this.booksData.push(book);
        this.createElement(book);
        this.storeBooksInLocal();
        titleInput.value = '';
        authorInput.value = '';
      }
    });
  }
  
  display() {
    window.addEventListener('load', (e) => {
      if (localStorage.getItem('books') === null) {
        e.preventDefault();
      } else {
        this.getBooksFromLocal();
        this.booksData.forEach((book) => {
          this.createElement(book);
        });
      }
    });
  }
}

const book = new Library();
book.addBook();
book.display();
