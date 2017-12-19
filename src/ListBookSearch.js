  import React, { Component } from 'react';
  import { Link } from 'react-router-dom'
  import PropTypes from 'prop-types'
  import escapeRegExp from 'escape-string-regexp'
  import sortBy from 'sort-by'
  import * as BooksAPI from './BooksAPI'
  import Book from './Book'

  class ListBookSearch extends Component {

      constructor(props){
         super(props);
         this.state = {
           shelf: "",
           filterBook: true
         };
       }

  onUpdateBookApp = ( book, e) => {
      this.props.onUpdateBook(book, e)
    }

    render() {
  const { books, shelf, filterBook } = this.props


      return (
        <div>
        <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfName}</h2>
        <div className="bookshelf-books">
        <div>
            <ol className="books-grid">
            {books.map((book) => (

                <li key = {book.id}>

                <Book
                title = {book.title}
                authors = {book.authors}
                imageBackground = {book.imageLinks.smallThumbnail}
                onUpdateBook = {(book, newShelf) =>
                  this.onUpdateBookApp(book, newShelf)
                }
                shelf = {this.props.shelf}

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

  export default ListBookSearch
