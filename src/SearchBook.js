import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./utils/BooksAPI";
import Book from "./Book";

class SearchBook extends Component {
	state = {
		searchedBooks: [],
		query: ""
	};

	SearchedBooksQuery(event) {
		this.setState({ query: event.target.value });
		BooksAPI.search(this.state.query).then(searchedBooks => {
			if (!searchedBooks || searchedBooks.hasOwnProperty("error")) {
				this.setState({ searchedBooks: [] });
			} else {
				this.setState({ searchedBooks });
				console.log(searchedBooks);
			}
		});
	}

	render() {
		const { query, searchedBooks } = this.state;
		const { changeShelf } = this.props;

		return (
			<div>
				<div className="search-books">
					<div className="search-books-bar">
						<Link className="close-search" to="/" />
						<div className="search-books-input-wrapper">
							<input
								onChange={this.SearchedBooksQuery.bind(this)}
								value={query}
								type="text"
								placeholder="Search by title or author"
							/>
						</div>
					</div>
				</div>
				<div className="search-books-results">
					<ol className="books-grid">
						{typeof searchedBooks !== "undefined" &&
							searchedBooks.map(book => (
								<Book
									key={book.id}
									book={book}
									changeShelf={changeShelf}
								/>
							))}
					</ol>
				</div>
			</div>
		);
	}
}

export default SearchBook;
