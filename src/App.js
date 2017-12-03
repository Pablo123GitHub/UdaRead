  import React from 'react'
  import * as BooksAPI from './BooksAPI'
  import './App.css'
  import ListBook from './ListBook'
  import SearchBooks from './SearchBooks'
  import {BrowserRouter, Route, Link} from 'react-router-dom'

  class BooksApp extends React.Component {
    state = {
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

    search(book) {
  BooksAPI.search(book).then(book => {
    this.setState(state => ({
      books: state.books.concat([ book ])
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
              <Link
                to='/search'
                className='search-book'
              >
              <div className="open-search">
                <a >Add a book</a>
              </div>
              </Link>
          </div>
        )}
          />

            <Route path="/search" component = {SearchBooks} />



         </div>
      )
  }}

  export default BooksApp
