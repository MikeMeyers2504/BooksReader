import React from "react";
import { Link } from "react-router-dom";
import BookShelf from "./Bookshelf";

const BooksView = props => {
	const { changeShelf } = props;
	return (
		<div className="list-books">
			<div className="list-books-title">
				<h1>MyReads</h1>
			</div>
			<BookShelf
				title="Currently reading"
				books={props.CurrentlyReading}
				changeShelf={changeShelf}
			/>
			<BookShelf
				title="Want to read"
				books={props.WantToRead}
				changeShelf={changeShelf}
			/>
			<BookShelf
				title="Read"
				books={props.Read}
				changeShelf={changeShelf}
			/>
			<div className="open-search">
				<Link to="/search" />
			</div>
		</div>
	);
};

export default BooksView;
