import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './utils/BooksAPI';
import './App.css';
import SearchBook from './SearchBook';
import BooksView from './BooksView';

class App extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    }); 
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <BooksView 
            CurrentlyReading = {this.state.books.filter( book => book.shelf === "currentlyReading")}
            WantToRead = {this.state.books.filter( book => book.shelf === "wantToRead")}
            Read = {this.state.books.filter( book => book.shelf === "read")}
          />
        )}/>
        <Route path='/search' render={() => (
          <SearchBook />
        )}/>
      </div>
    );
  }
}

export default App;
