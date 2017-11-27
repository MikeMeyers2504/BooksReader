import React, { Component } from "react";
import { Route } from "react-router-dom";
import * as BooksAPI from "./utils/BooksAPI";
import "./App.css";
import SearchBook from "./SearchBook";
import BooksView from "./BooksView";

class App extends Component {
	state = {
		books: []
	};

	componentDidMount() {
		BooksAPI.getAll().then(books => {
			this.setState({ books });
			console.log(books)
		});
	}

	changeShelf = (book, newShelf) => {
		BooksAPI.update(book, newShelf).then(() => {
			book.shelf = newShelf;
			this.setState(state => ({
				books: state.books
					.filter(updatedBook => updatedBook.id !== book.id)
					.concat([book])
			}));
		});
	};

	render() {
		return (
			<div className="app">
				<Route
					exact
					path="/"
					render={() => (
						<BooksView
							CurrentlyReading={this.state.books.filter(
								book => book.shelf === "currentlyReading"
							)}
							WantToRead={this.state.books.filter(
								book => book.shelf === "wantToRead"
							)}
							Read={this.state.books.filter(
								book => book.shelf === "read"
							)}
							changeShelf={this.changeShelf}
						/>
					)}
				/>
				<Route
					path="/search"
					render={() => (
						<SearchBook
							books={this.state.books}
							changeShelf={this.changeShelf}
						/>
					)}
				/>
			</div>
		);
	}
}

export default App;
