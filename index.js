function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not OK');
      }
      return response.json();
    })
    .then(json => {
      renderBooks(json);
    })
    .catch(error => {
      console.log(error);
    });
}

function renderBooks(books) {
  const main = document.querySelector('main');
  if (!main) {
    console.log('Could not find the main element');
    return;
  }
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  fetchBooks();
});

