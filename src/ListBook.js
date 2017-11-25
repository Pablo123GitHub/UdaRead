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

     };

   }

  render() {

const { books } = this.props

console.log("something")

let showingBooks = books

    return (
    <div>

    <div className="bookshelf">
      <h2 className="bookshelf-title">Want to Read</h2>
<div className="bookshelf-books">
<div>
<ol className="books-grid">

    {showingBooks.map((book) => (

        <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
            <div className="book-shelf-changer">
              <select>
                <option value="none" disabled>Move to...</option>
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
