import React from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './Bookshelf';

const BooksView = (props) => {
		return(
			<div className="list-books">
            	<div className="list-books-title">
              		<h1>MyReads</h1>
            	</div>      
            	<BookShelf 
            		title="Currently reading" 
            		books={props.CurrentlyReading} 
            	/>
            	<BookShelf 
            		title="Want to read" 
            		books={props.WantToRead} 
            	/>
            	<BookShelf 
            		title="Read" 
            		books={props.Read} 
            	/>
            	<div className="open-search">
              		<Link to='/search' ></Link>
            	</div>
          	</div>
		)
}

export default BooksView;