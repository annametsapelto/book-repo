import './App.css';
import BookList from './Components/BookList';
import AddBook from './Components/AddBook';
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import Header from './Components/Header';

function App() {
  const [add, setAdd] = useState(false);
  const [bookWasAdded, setBookWasAdded] = useState(false);

  function addNewbook() {
    setAdd(!add);
  }

  function newBookWasAdded() {
    setBookWasAdded(true);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>Books!</h1>
        <BookList bookWasAdded={bookWasAdded}></BookList>
      </header>
      <section>
      </section>
      <Button variant="contained" color="primary" onClick={() => addNewbook()}>Add A Book</Button>
      <section>
        {add && <AddBook add={addNewbook} newBookWasAdded={newBookWasAdded}></AddBook>}
      </section>
      
    </div>
  );
}

export default App;
