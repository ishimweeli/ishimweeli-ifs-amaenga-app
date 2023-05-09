import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import Swal from 'sweetalert2';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    input: {
        margin: theme.spacing(2),
    },
    button: {
        margin: theme.spacing(2),
    },
}));

function PublicationPage() {
    const classes = useStyles();
    const [ title, setTitle ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ image, setImage ] = useState(null);
    const [ loading, setLoading ] = useState(false);

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };


    const [ pdf, setPdf ] = useState(null);
    const handlePdfChange = (event) => {
        setPdf(event.target.files[ 0 ]);
    };

    const handleImageChange = (event) => {
        setImage(event.target.files[ 0 ]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('image', image);
        formData.append('pdf', pdf);
        setLoading(true);
        axios.post('https://amarenga-appa.onrender.com/publication', formData)
            .then((response) => {
                setLoading(false);
                Swal.fire({
                    icon: 'success',
                    title: 'Publication Uploaded',
                    text: 'Your publication has been uploaded successfully.',
                });
            })
            .catch((error) => {
                setLoading(false);
                Swal.fire({
                    icon: 'error',
                    title: 'Upload Failed',
                    text: error.message,
                });
            });
    };

    return (
        <form className={ classes.root } onSubmit={ handleSubmit }>
            <h1>upload publication</h1>
            <TextField
                className={ classes.input }
                label="Title"
                variant="outlined"
                value={ title }
                onChange={ handleTitleChange }
                required
            />
            <TextField
                className={ classes.input }
                label="Description"
                variant="outlined"
                value={ description }
                onChange={ handleDescriptionChange }
                required
            />
            <input
                className={ classes.input }
                type="file"
                accept=".jpg,.jpeg,.png"
                onChange={ handleImageChange }
                required
            />
            <input
                className={ classes.input }
                type="file"
                accept=".pdf"
                onChange={ handlePdfChange }
                required
            />
            <Button
                className={ classes.button }
                type="submit"
                variant="contained"
                color="primary"
                disabled={ loading }
            >
                { loading ? 'Uploading...' : 'Upload Publication' }
            </Button>
        </form>
    );
}

export default PublicationPage;
