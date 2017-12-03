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
           shelf: ""
         };
       }

  onUpdateBookApp = ( book, e) => {
      this.props.onUpdateBook(book, e)
    }

    render() {
  const { books } = this.props

  const { shelf } = this.props

  let  showingBooks = books.filter((book) =>
  this.props.shelf == book.shelf
  )

  console.log("inListBookRender", showingBooks)

      return (
        <div>
        <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfName}</h2>
        <div className="bookshelf-books">
        <div>
            <ol className="books-grid">
            {showingBooks.map((book) => (

                <li key = {book.id}>

                <Book
                title = {book.title}
                authors = {book.authors}
                imageBackground = {book.imageLinks.smallThumbnail}
                onUpdateBook = {(book, newShelf) =>
                  this.onUpdateBookApp(book, newShelf)
                }
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
