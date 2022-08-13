import {useState} from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

function AddBook({add}) {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
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
            const book={title, author, description};
        }
    }

    const validateData = ()=> {
        if (title.length > 1 || author.length > 1 || description.length > 1) {
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
                <TextField value={title} onChange={(event) => setTitle(event.target.value)} id="outlined-basic" label="Book Title" variant="outlined" style={fieldStyle} fullWidth/><br></br>
                <TextField value={author} onChange={(event) => setAuthor(event.target.value)}id="outlined-basic" label="Author" variant="outlined" style={fieldStyle} fullWidth/><br></br>
                <TextField value={description} onChange={(event) => setDescription(event.target.value)}id="outlined-basic" label="Description" variant="outlined" style={fieldStyle} fullWidth/><br></br>
                <Button variant="outlined" color="primary" onClick={() => add()}>Cancel</Button>
                <Button variant="contained" color="primary" onClick={handleClick}>Save</Button>
            </form>
            {!validated && <p>Sorry but some information was missing. Fill in the fields, please.</p>}
        </Paper>
</Container>

    )

}

export default AddBook;