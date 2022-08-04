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