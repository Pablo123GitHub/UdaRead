import React, { Component } from 'react'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import ListBookSearch from './ListBookSearch'

  import {BrowserRouter, Link} from 'react-router-dom'


  class SearchBooks extends Component {

    constructor(props) {
      super(props);
      this.state = {
        query: '',
        searchResults: [],
        shelvedBooks: this.props.books,
        value: 'none'
      }
    }

    componentWillReceiveProps(nextProps) {
      if (this.state.shelvedBooks.length < nextProps.books.length) {
        this.setState({
          shelvedBooks: nextProps.books
        });
      }
    }

    static propTypes = {
      books: PropTypes.array.isRequired,
    }

    updateQuery(query) {
      this.setState({ query: query.trim() })
      if (query.length > 0) {
        BooksAPI.search(query, 20).then((books) => {
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

    changeShelf = (e, book) => {
      this.props.onUpdateBook(book, e.target.value)
    }

    getShelf(book) {
      let bookInShelf = this.state.shelvedBooks
        .filter((shelved) => shelved.id === book.id)
      if (bookInShelf.length) {
        return bookInShelf[0].shelf
      } else {
        return 'none'
      }
    }

    render() {
      const { query, searchResults } = this.state

      return (
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to='/'>Close</Link>
            <div className="search-books-input-wrapper">

              <input
                type="text"
                placeholder="Search by title or author"
                value={query}
                onChange={(event) => this.updateQuery(event.target.value)}
              />

            </div>
          </div>
          {searchResults && (
            <div className="search-books-results">
              <ol className="books-grid">
                {searchResults.map((book) => (
                  <li key={book.id}>
                    <div className="book">
                      <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})`}}></div>
                        <div className="book-shelf-changer">
                          <form>
                            <select value={this.getShelf(book)} onChange={(e) => this.changeShelf(e, book)}>
                              <option value="" disabled>Move to...</option>
                              <option value="currentlyReading">Currently Reading</option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                            </select>
                          </form>
                        </div>
                      </div>
                      <div className="book-title">
                        {book.title}
                      </div>
                        <div className="book-authors">
                          {book.authors ? book.authors.join(', '): ''}
                        </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
      )

    }
  }

export default SearchBooks
