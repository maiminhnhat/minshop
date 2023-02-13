let books = [
  {
    id: 1,
    name: "Luật tâm thức",
    price: 220000,
    provider: "Fahasha",
    imageNumber: "01",
  },
  {
    id: 2,
    name: "Chiến binh cầu vồng",
    price: 140000,
    provider: "Fahasha",
    imageNumber: "02",
  },
  {
    id: 3,
    name: "Nghệ thuật tập trung",
    price: 90000,
    provider: "Tuổi trẻ",
    imageNumber: "03",
  },
  {
    id: 4,
    name: "Bye Béo",
    price: 305000,
    provider: "Kmin Books",
    imageNumber: "04",
  },
  {
    id: 5,
    name: "Sát thủ bán hàng",
    price: 180000,
    provider: "Fahasha",
    imageNumber: "05",
  },
  {
    id: 6,
    name: "Hoàng tử bé",
    price: 50000,
    provider: "Kmin Books",
    imageNumber: "06",
  },
  {
    id: 7,
    name: "Tâm lý học tội phạm",
    price: 400000,
    provider: "Kmin Books",
    imageNumber: "07",
  },
  {
    id: 8,
    name: "Hiểu về trái tim",
    price: 130000,
    provider: "Tuổi trẻ",
    imageNumber: "08",
  },
];

function displayData(books) {
  console.log(books);
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
    return minPrice <= book.price && book.price >= maxPrice;
  });

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

displayData(books);
