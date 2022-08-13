import { Button } from '@material-ui/core';

function BookDetail({book, showBookDetail}) {
    return (
        <div>        
            <p>{book.descr}</p>
            <Button>Modify</Button>
            <Button>Delete</Button>
            <Button onClick={(e) => showBookDetail()}>Close</Button>
    </div>)


}

export default BookDetail;