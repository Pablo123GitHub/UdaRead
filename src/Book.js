import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import * as BooksAPI from './BooksAPI'

class Book extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      shelf: ""
    }
    this.changeShelf = this.changeShelf.bind(this);
  }

  changeShelf = ( book, e) => {

    this.props.onUpdateBook(book, e.target.value)
    this.setState({shelf: e.target.value})
  }

  render() {
    return (
      <div className="book">

      <div className="book-top">
      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.imageBackground})` }}></div>
      <div className="book-shelf-changer">
      <select value={this.props.shelf} onChange={(e) => this.changeShelf(this.props, e)}
      >

      <option value="none" disabled>Move to...</option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option>
      </select>

      </div>
      </div>
      <div className="book-title">{this.props.title} </div>
      <div className="book-authors">{this.props.authors}</div>
      </div>
    )
  }
}

export default Book
