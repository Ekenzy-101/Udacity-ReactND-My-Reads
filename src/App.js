import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import Header from "./components/HeaderComponent";
import Search from "./components/SearchComponent";
import SearchButton from "./components/SearchButtonComponent";
import Shelves from "./components/ShelvesComponent";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  state = {
    books: [],
  };

  // Get book data via API
  componentDidMount() {
    BooksAPI.getAll().then((res) => {
      this.setState({ books: res });
    });
  }

  // Move book to new shelf
  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then((res) => {
      BooksAPI.getAll().then((res) => {
        this.setState({ books: res });
      });
    });
  };

  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/">
            <div className="list-books">
              <Header />
              <Shelves books={this.state.books} updateBook={this.updateBook} />
              <SearchButton />
            </div>
          </Route>

          <Route exact path="/search">
            <Search books={this.state.books} updateBook={this.updateBook} />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
