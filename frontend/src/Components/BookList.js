import { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import './List.css';
import BookDetail from './BookDetail';


function BookList({getBooks, books}) {
    const [showDetail, setShowDetail] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);

useEffect(() => {
    getBooks();
}, [])

function showBookDetail(clickedBook) {
    setShowDetail(!showDetail);
    setSelectedBook(clickedBook);
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
                        <li key={book.id} onClick={() => showBookDetail(book)}>{book.book} by {book.author}
                        {showDetail && selectedBook === book &&
                            <div>
                                <BookDetail showBookDetail={showBookDetail} book={selectedBook} getBooks={getBooks}></BookDetail>
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