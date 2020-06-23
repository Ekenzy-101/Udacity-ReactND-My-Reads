import React from "react";
import Shelf from "./ShelfComponent";

const Shelves = ({ books, updateBook }) => {
  // Book Shelves
  const currentlyReading = books.filter(
    (book) => book.shelf === "currentlyReading"
  );
  const wantToRead = books.filter((book) => book.shelf === "wantToRead");
  const read = books.filter((book) => book.shelf === "read");

  return (
    <div className="list-books-content">
      <div>
        <Shelf
          shelf={currentlyReading}
          updateBook={updateBook}
          title="Currently Reading"
        />
        <Shelf
          shelf={wantToRead}
          updateBook={updateBook}
          title="Want to Read"
        />
        <Shelf shelf={read} updateBook={updateBook} title="Read" />
      </div>
    </div>
  );
};

export default Shelves;
