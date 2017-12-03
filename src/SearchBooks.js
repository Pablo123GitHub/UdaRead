import React, { Component } from 'react'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import ListBook from './ListBook'
  import {BrowserRouter, Link} from 'react-router-dom'


  class SearchBooks extends Component {

    state = {
      query: '',
      books: [],
      searchResults: []
    }


    updateQuery = (query) => {
      this.setState({query: query.trim() })
      if (query.length > 0) {
    BooksAPI.search(query, 20).then((books) => {
      console.log("booksAPI", books)
        if (books.error) {
      this.setState({ searchResults: [] })
    } else {
      this.setState({ searchResults: books })
    }
    })
  } else {
    this.setState({ searchResults: [] })
  }
    }

    updateBook(book, newShelf) {
      let toUpdate = this.state.books.filter((each) => each.title == book.title)
      BooksAPI.update(toUpdate[0], newShelf).then((books) => {
        toUpdate[0].shelf = newShelf
        this.setState(state => ({
          books: state.books
        }))
      })
    }


    render() {
      const { query, searchResults } = this.state

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
                       <input
                       type="text"
                       placeholder="Search by title or author"
                       value = {query}
                       onChange={(event) => this.updateQuery(event.target.value)}
                       />

                       </div>
                     </div>
                   <div className="search-books-results">
                   <ListBook
                   books ={searchResults}
                  shelf = {undefined}
                   shelfName = "All Books"
                   onUpdateBook ={(book, newShelf) =>
                    this.updateBook(book, newShelf)
                  }
                   />

            </div>
        </div>

    </div>
    )
}
  }


export default SearchBooks
