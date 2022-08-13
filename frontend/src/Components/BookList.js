import { useState, useEffect } from 'react';


function BookList() {
    const [books, setBooks] = useState('');
useEffect(() => {
    
}, [books])
    return (
        <div>
            {!books ? <p>Sorry, the list is empty!</p> :
            <div>
                <h2>All saved books</h2>
                
            </div>}
        </div>
    )

}

export default BookList;