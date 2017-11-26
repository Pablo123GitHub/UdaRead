import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBook from './ListBook'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    // showSearchPage: false
    books: []
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }
  render() {
    return (
      <div className="list-books-content">
         <div>
      
             <ListBook
             books ={this.state.books}/>
             <ListBook
             books ={this.state.books}/>
             <ListBook
             books ={this.state.books}/>
         </div>
       </div>
    )
  }
}

export default BooksApp
