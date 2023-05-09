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

function AmarengaPage() {
  const classes = useStyles();
  const [ title, setTitle ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ image, setImage ] = useState(null);
  const [ pdf, setPdf ] = useState('');
  const [ loading, setLoading ] = useState(false);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[ 0 ]);
  };

  const handlePdfChange = (event) => {
    setPdf(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append('kinyarwanda', title);
      formData.append('english', description);
      formData.append('french', pdf);
      formData.append('avatar', image);


      const response = await axios.post('https://amarenga-appa.onrender.com/publication', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          Swal.fire({
            title: 'Uploading Publication...',
            html: `Uploading... ${percentCompleted}%`,
            allowOutsideClick: false,
            didOpen: () => {
              Swal.showLoading();
            },
          });
        },
      });

      setLoading(false);
      Swal.fire({
        icon: 'success',
        title: 'amarenga Uploaded',
        text: 'Your amarenga has been uploaded successfully.',
      });
    } catch (error) {
      setLoading(false);
      Swal.fire({
        icon: 'error',
        title: 'Upload Failed',
        text: error.message,
      });
    }
  };

  return (

    <form className={ classes.root } onSubmit={ handleSubmit }>
      <h1>upload amarenga</h1>
      <TextField
        className={ classes.input }
        label="kinyarwanda"
        variant="outlined"
        value={ title }
        onChange={ handleTitleChange }
        required
      />
      <TextField
        className={ classes.input }
        label="english"
        variant="outlined"
        value={ description }
        onChange={ handleDescriptionChange }
        required
      />
      <TextField
        className={ classes.input }
        label="french"
        variant="outlined"
        value={ pdf }
        onChange={ handlePdfChange }
        required
      />
      <input
        className={ classes.input }
        type="file"
        accept=".gif"
        onChange={ handleImageChange }
        required
      />
      <Button
        className={ classes.button }
        type="submit"
        variant="contained"
        color="primary"
        disabled={ loading }
      >
        { loading ? 'Uploading...' : 'Upload amarenga' }
      </Button>
    </form>
  );
}

export default AmarengaPage;
