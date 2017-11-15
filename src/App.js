import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './utils/BooksAPI';
import './App.css';
import SearchBook from './SearchBook';
import BooksView from './BooksView';

class App extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: []
  };
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
      console.log({books});
    }); 
  }
  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <BooksView />
        )}/>
        <Route path='/search' render={() => (
          <SearchBook />
        )}/>
      </div>
    );
  }
}

export default App;
