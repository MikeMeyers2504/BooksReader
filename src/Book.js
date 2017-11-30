import React from "react";

const Book = props => {
	const { book } = props;
	const bookStyling = {
		width: 128,
		height: 193,
		backgroundImage: "url(" + book.imageLinks.thumbnail + ")"
	};
	return (
		<li>
			<div className="book">
				<div className="book-top">
					<div className="book-cover" style={bookStyling} />
					<div className="book-shelf-changer">
						<select
							value={book.shelf}
							onChange={event =>
								props.changeShelf(book, event.target.value)}
						>
							<option value="title">Move to...</option>
							<option value="currentlyReading">Currently Reading</option>
							<option value="wantToRead">Want to Read</option>
							<option value="read">Read</option>
							<option value="none">None</option>
						</select>
					</div>
				</div>
				<div className="book-title">{book.title}</div>
				<div className="book-authors">{book.authors}</div>
			</div>
		</li>
	);
};

export default Book;
