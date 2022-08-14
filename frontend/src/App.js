import './App.css';
import BookList from './Components/BookList';
import AddBook from './Components/AddBook';
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import Header from './Components/Header';

function App() {
  const [add, setAdd] = useState(false);
  const [books, setBooks] = useState([]);
  const [bookWasAdded, setBookWasAdded] = useState(false);

  function addNewbook() {
    setAdd(!add);
  }
  
function getBooks() {
  fetch("http://localhost:8080/book/getAll")
.then(res => res.json())
.then(result => setBooks(result));
}

  return (
    <div className="App">
      <header className="App-header">
        
        <h1>Books!</h1>
        <BookList bookWasAdded={bookWasAdded} getBooks={getBooks} books={books}></BookList>
      </header>
      <section>
      </section>
      <Button variant="contained" color="primary" onClick={() => addNewbook()}>Add A Book</Button>
      <section>
        {add && <AddBook add={addNewbook}  bookWasAdded={bookWasAdded} getBooks={getBooks}></AddBook>}
      </section>
      
    </div>
  );
}

export default App;
