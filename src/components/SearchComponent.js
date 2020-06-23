import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import Book from "./BookComponent";

class Search extends Component {
  state = {
    results: [],
  };

  handleSearch = (input) => {
    if (input.length > 0) {
      BooksAPI.search(input).then((books) => {
        const booksWithShelves = books.map((book) => {
          const myBooks = this.props.books.filter(
            (myBook) => myBook.id === book.id
          );
          book.shelf = "none";
          return myBooks.length > 0 ? myBooks[0] : book;
        });
        this.setState({ results: booksWithShelves });
      });
    } else {
      this.setState({ results: [] });
    }
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.inputEvent}
              onChange={(event) => this.handleSearch(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          {this.state.results.length > 0 ? (
            <ol className="books-grid">
              {this.state.results.map((book) => (
                <li key={book.id}>
                  <Book book={book} updateBook={this.props.updateBook} />
                </li>
              ))}
            </ol>
          ) : (
            <ol className="books-grid"></ol>
          )}
        </div>
      </div>
    );
  }
}

export default Search;
