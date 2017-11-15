import React, { Component } from 'react';

class SearchBook extends Component {
	render() {
		return(
			<div>
				<div className="search-books">
            		<div className="search-books-bar">
              			<a className="close-search" onClick={() => console.log("back from searching")}>Close</a>
              			<div className="search-books-input-wrapper">
                			{}
                			<input type="text" placeholder="Search by title or author"/>
              			</div>
            		</div>
            	</div>
            	<div className="search-books-results">
              		<ol className="books-grid"></ol>
            	</div>
            </div>
		)
	}	
}

export default SearchBook;