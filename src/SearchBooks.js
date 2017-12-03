import React, { Component } from 'react'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
  import {BrowserRouter, Link} from 'react-router-dom'


  class SearchBooks extends Component {

    render() {
      return (
    <div>
        <div className="search-books">
            <div className="search-books-bar">
                   <Link
                     to='/'
                     className='search-book'
                   >
                      <div className="close-search" >Close</div>
                   </Link>
                     <div className="search-books-input-wrapper">
                       <input type="text" placeholder="Search by title or author"/>

                       </div>
                     </div>
                   <div className="search-books-results">
                     <ol className="books-grid"></ol>
            </div>
        </div>

    </div>
    )
}
  }


export default SearchBooks
