let myLibrary = [];

function Book(title, author, numPages, read) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.read = read;
  this.info = function () {
    let str = title + " by " + author + ", " + numPages + " pages, ";
    str += read ? "has been read" : "not read yet";
    return str;
  };
}

function addBookToLibrary(title, author, numPages, read) {
  const book1 = new Book(title, author, numPages, read);
  myLibrary.push(book1);
}

function showAllBooks() {
  const displayCards = document.querySelector("#displayCards");
  for (let i = 0; i < myLibrary.length; ++i) {
    const card = document.createElement("div");
    card.classList.toggle("card");
    const h4 = document.createElement("h4");
    h4.textContent = myLibrary[i].title;
    const h5 = document.createElement("h5");
    h5.textContent =
      "by " +
      myLibrary[i].author +
      "\n" +
      myLibrary[i].numPages +
      " pages\nRead: " +
      myLibrary[i].read;
    card.appendChild(h4);
    card.appendChild(h5);
    displayCards.appendChild(card);
    console.log("success?");
  }
}

document.querySelector("#newBook").addEventListener("click", () => {
  const showForm = document.querySelector("#newBookForm");
  showForm.style.display = "block";
});

addBookToLibrary("The Hobbit", "JRR Tolkien", "299", true);
addBookToLibrary("Anne Frank", "Anne Frank", "512", false);
addBookToLibrary("Peepoo", "Goberman", "1", true);
showAllBooks();