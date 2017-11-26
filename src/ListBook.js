import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class ListBook extends Component {

  constructor(props){
     super(props);
     this.state = {
title: ""
     };
   }

  render() {
const { books } = this.props
let showingBooks = books
    return (
    <div>

    <div className="bookshelf">
      <h2 className="bookshelf-title">Want to Read</h2>
<div className="bookshelf-books">
<div>
<ol className="books-grid">
    {showingBooks.map((book) => (

        <li key = {book.id}>
{console.log({book})}
        <Book
          title = {book.title}
          authors = {book.authors}
          imageBackground = {book.imageLinks.smallThumbnail}
          shelf = {book.shelf}
        />
    </li>

    ))}

    </ol>
   </div>
    </div>
      </div>
   </div>
  )
  }
}

export default ListBook
