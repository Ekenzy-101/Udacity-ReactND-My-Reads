import React from "react";
import Book from "./BookComponent";

const Shelf = ({ shelf, updateBook, title }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {shelf.map((book) => (
            <li key={book.id}>
              <Book book={book} updateBook={updateBook} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Shelf;
