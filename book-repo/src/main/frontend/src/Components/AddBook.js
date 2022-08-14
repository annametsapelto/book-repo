import {useState} from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

function AddBook({add, getBooks}) {
    const [book, setBook] = useState('');
    const [author, setAuthor] = useState('');
    const [descr, setDescr] = useState('');
    const [validated, setValidated] = useState(true);

    const paperStyle={
        padding: "20px",
        marginTop: "50px",
        height: 300
    }

    const fieldStyle={
        marginBottom: 10
    }

    const handleClick = (event) => {
        event.preventDefault();
        if (validateData) {
            const newBook={book, author, descr};
            fetch("http://localhost:8080/book/addBook", {
                method:"POST", 
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(newBook)
            }
            ).then(()=> {
                setBook('');
                setAuthor('');
                setDescr('');
                console.log("New book was added");
                getBooks();
                add();
            })
        }
    }

    const validateData = ()=> {
        if (book.length > 1 || author.length > 1 || descr.length > 1) {
            setValidated(true)
            return true;
        }
        else {
            setValidated(false);
            return false;
        }
    }
    return (
        <Container maxWidth="sm">
            <Paper elevation={2} style={paperStyle}>   
            <h2>Add Your Book Here</h2>         
                <form>
                <TextField value={book} onChange={(event) => setBook(event.target.value)} id="outlined-basic" label="Book Title" variant="outlined" style={fieldStyle} fullWidth/><br></br>
                <TextField value={author} onChange={(event) => setAuthor(event.target.value)}id="outlined-basic" label="Author" variant="outlined" style={fieldStyle} fullWidth/><br></br>
                <TextField value={descr} onChange={(event) => setDescr(event.target.value)}id="outlined-basic" label="Description" variant="outlined" style={fieldStyle} fullWidth/><br></br>
                <Button variant="outlined" color="primary" onClick={() => add()}>Cancel</Button>
                <Button variant="contained" color="primary" onClick={handleClick}>Save</Button>
            </form>
            {!validated && <p>Sorry but some information was missing. Fill in the fields, please.</p>}
        </Paper>
</Container>

    )

}

export default AddBook;