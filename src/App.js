  import React from 'react'
  import * as BooksAPI from './BooksAPI'
  import './App.css'
  import ListBook from './ListBook'
  import SearchBooks from './SearchBooks'
  import {BrowserRouter, Route} from 'react-router-dom'

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
      return (

        <div className="list-books-content">
        <Route exact path="/"  render={()=> (
          <div>

              <ListBook
              books ={this.state.books}
              shelf = "currentlyReading"
              shelfName = "Currently Reading"
              onUpdateBook ={(book, newShelf) =>
               this.updateBook(book, newShelf)
             }
              />
              <ListBook
              books ={this.state.books}
              shelf = "wantToRead"
               shelfName = "Want to Read"
               onUpdateBook ={(book, newShelf) =>
                this.updateBook(book, newShelf)
               }
              />
              <ListBook
              books ={this.state.books}
              shelf = "read"
              shelfName = "Read"
              onUpdateBook ={(book, newShelf) =>
               this.updateBook(book, newShelf)
             }
              />
          </div>
        )}
          />

        <Route path="/search" component = {SearchBooks}

     />
         </div>
      )
  }}

  export default BooksApp
