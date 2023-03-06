let books;
function displayData(books) {
  let list = document.getElementById("list");

  for (const element of books) {
    let item = document.createElement("div");
    item.className = "item";

    item.innerHTML += `<img src="./images/${element.imageNumber}.jpg" alt="">`;
    item.innerHTML += `<h2>${element.name}</h2>`;
    item.innerHTML += `<p>${element.price}</p>`;
    list.appendChild(item);
  }
}

function searchBook() {
  const input = document.getElementById("search");
  const inputValue = input.value;
  const results = books.filter((book) => {
    return book.name.includes(inputValue);
  });
  let list = document.getElementById("list");
  list.innerHTML = "";
  displayData(results);
}

function sort() {
  let sortedBooks = [];
  const checkedPublisher = [];

  const minPrice = document
    .getElementById("myForm")
    .elements.namedItem("min-price").value;
  const maxPrice = document
    .getElementById("myForm")
    .elements.namedItem("max-price").value;
  const checkedBoxes = document.querySelectorAll(
    "input[name=provider]:checked"
  );

  for (const element of checkedBoxes) {
    checkedPublisher.push(element.value);
  }

  sortedBooks = books.filter((book) => {
    return minPrice >= book.price || book.price <= maxPrice;
  });

  if(sortedBooks.length == 0) sortedBooks = books

  if (checkedPublisher.length > 0) {
    const results = sortedBooks.filter((result) => {
      return checkedPublisher.includes(result.provider);
    });
    sortedBooks = results;
  }

  let list = document.getElementById("list");
  list.innerHTML = "";
  displayData(sortedBooks);
}

function getBooks() {
   fetch("http://localhost:3000/books")
    .then((response) => response.json())
    .then((data) => {
      books = data
      displayData(data);
    });
}

getBooks();
