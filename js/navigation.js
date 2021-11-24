const list = document.getElementById('list');
const addNew = document.getElementById('add-new');
const contact = document.getElementById('contact');
const listBook = document.querySelector('.books');
const newBook = document.querySelector('.add-books');
const contactBtn = document.querySelector('.contact-form');
const heading = document.querySelector('.main-title');

listBook.addEventListener('click', () => {
  list.style.display = 'block';
  addNew.style.display = 'none';
  contact.style.display = 'none';
  heading.style.display = 'block';
});

newBook.addEventListener('click', () => {
  addNew.style.display = 'block';
  contact.style.display = 'none';
  list.style.display = 'none';
  heading.style.display = 'none';
});

contactBtn.addEventListener('click', () => {
  contact.style.display = 'flex';
  list.style.display = 'none';
  addNew.style.display = 'none';
});
