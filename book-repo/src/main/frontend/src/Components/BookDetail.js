import { Button } from '@material-ui/core';

function BookDetail({book, showBookDetail, getBooks}) {

    function deleteBook(id) {
        const res = fetch(`http://localhost:8080/book/delete/${id}`, {method: 'DELETE'})
            .then(() => console.log(res + " Book deleted."))
            .then(() => getBooks())
            
        }

    return (


        <div>        
            <p>{book.descr}</p>
            <Button variant="outlined" color="primary">Modify</Button>
            <Button variant="outlined" color="primary" onClick={() => deleteBook(book.id)}>Delete</Button>
            <Button onClick={(e) => showBookDetail()} variant="outlined" color="primary">Close</Button>
    </div>)


}

export default BookDetail;