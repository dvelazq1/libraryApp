// Create an array to store all the books a user adds to the library. Then 
let myLibrary = [];
//create an event listener that will trigger the addBookToLibrary function when the user clicks the submit button.
document.getElementsByClassName("btn-block")[0].addEventListener("click", addBookToLibrary);
/*
Create a function that will take the user input and create a new book object. The object will
have 4 properties: title, author, pageCount, and status. After storing this information, this 
function will also publish the book to the page using DOM manipulation.
*/
function addBookToLibrary() {
  // Use the form to get the user input and create a new book object based on the input.
  let bookTitle = document.getElementById("title").value;
  let bookAuthor = document.getElementById("author").value;
  let bookPageCount = document.getElementById("pageCount").value;
  let bookStatus = document.getElementById("statusRead");
  if (bookStatus.checked) {
    bookStatus = "Read";
  } else {
    bookStatus = "Not Read";
  }
  let newBook = new Book(bookTitle, bookAuthor, bookPageCount, bookStatus);
  // Add the new book to the library array.
  myLibrary.push(newBook);
  console.log(myLibrary);
  // Reset the form.
  document.getElementById("myForm").reset();
  // Publish the new book to the page using DOM manipulation.
  const bookList = document.getElementsByClassName("bookList");
  const trElement = document.createElement("tr");
  const tbodyElement = document.createElement("tbody");
  const titleElement = document.createElement("td");
  const authorElement = document.createElement("td");
  const pageCountElement = document.createElement("td");
  const statusElement = document.createElement("td");
  titleElement.innerText = bookTitle;
  authorElement.innerText = bookAuthor;
  pageCountElement.innerText = bookPageCount;
  statusElement.innerText = bookStatus;
  trElement.appendChild(titleElement);
  trElement.appendChild(authorElement);
  trElement.appendChild(pageCountElement);
  trElement.appendChild(statusElement);
  tbodyElement.appendChild(trElement);
  bookList[0].appendChild(tbodyElement);
}
