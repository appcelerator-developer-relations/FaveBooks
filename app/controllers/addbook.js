// Get a singleton reference to our books collection:
var myBooks = Alloy.Collections.books;

// Adds a new book to the collection and closes the current window
function addBookToCollection() {
    var book = Alloy.createModel('books', {
        title : $.titleInput.value,
        author : $.authorInput.value
    });
    myBooks.add(book);
    book.save();
    $.addbook.close();
} 