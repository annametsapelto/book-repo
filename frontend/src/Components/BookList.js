import { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import './List.css';
import BookDetail from './BookDetail';


function BookList() {
    const [books, setBooks] = useState([]);
    const [showDetail, setShowDetail] = useState(false);

useEffect(() => {
    getBooks();
    const interval=setInterval(() => {
        getBooks()
    }, 10000)
    return()=>clearInterval(interval);
}, [])

function getBooks() {
        fetch("http://localhost:8080/book/getAll")
    .then(res => res.json())
    .then(result => setBooks(result));
}

function showBookDetail() {
    setShowDetail(!showDetail);
}

const paperStyle={
    padding: "20px",
    margin: "50px",
}
    return (
        <div>
            {!books ? <p>Sorry, the list is empty!</p> :
            <div className="bookList">
                <h2>All saved books</h2>
                <Paper elevation={2} style={paperStyle}>
                {books.map(book =>(
                    <ul>
                        <li key={book.id} onClick={(e) => showBookDetail()}>{book.book} by {book.author}
                        {showDetail && 
                            <div>
                                <BookDetail showBookDetail={showBookDetail} book={book}></BookDetail>
                            </div>}
                        </li>
                    </ul>
                    ))}
                </Paper>
            </div>}
        </div>
    )

}

export default BookList;