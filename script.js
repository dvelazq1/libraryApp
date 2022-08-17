function Book(title, author, pageCount, status) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.status = status;
    this.info = function() {
        return this.title + " by " + this.author + ", " + this.pageCount + " pages, " + this.status;
    }
    console.log(this.info());
}

let myLibrary = [];
document.getElementsByClassName("btn-block")[0].addEventListener("click", addBookToLibrary);
function addBookToLibrary(){
    let bookTitle = document.getElementById("title").value;
    let bookAuthor = document.getElementById("author").value;
    let bookPageCount = document.getElementById("pageCount").value;
    let bookStatus = document.getElementById("statusRead");
    if (bookStatus.checked) {
        bookStatus = "Read";
    }
    else {
        bookStatus = "Not Read";
    }
    let newBook = new Book(bookTitle, bookAuthor, bookPageCount, bookStatus);
    myLibrary.push(newBook);
    console.log(myLibrary);
    document.getElementById("myForm").reset();
}