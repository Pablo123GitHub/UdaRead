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
shelf: "what"
     };
   }

  render() {
const { books } = this.props

const {shelf} = this.state

let  showingBooks = books.filter((book) => book
)
    return (
    <div>

    <div className="bookshelf">
      <h2 className="bookshelf-title">{this.props.shelf}</h2>
<div className="bookshelf-books">
<div>
<ol className="books-grid">
    {showingBooks.map((book) => (
        <li key = {book.id}>
        <Book
          title = {book.title}
          authors = {book.authors}
          imageBackground = {book.imageLinks.smallThumbnail}
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
