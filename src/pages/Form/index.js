import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, TextField } from '@mui/material';
import { addOfflineMovie } from '../../store/actions/offlineMoviesActions';
import { useDispatch,useSelector } from 'react-redux';

const validationSchema = yup.object({
  title: yup
    .string('Enter movie title')
    .required('Title is required'),
  description: yup
    .string('Enter movie description')
    .required('Description is required'),
});

const Form = () => {
    const movies = useSelector((state) => state.offlineMovies.data);
    const dispatch=useDispatch()
  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values,{resetForm}) => {
        dispatch(addOfflineMovie(movies,values))
        resetForm()
    },
  });

  return (
    <div style={{ width:'60%', margin:'50px auto'}}>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="title"
          name="title"
          label="title"
          value={formik.values.title}
          onChange={formik.handleChange}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.description && formik.errors.description}
        />
        <TextField
        sx={{marginTop:'20px'}}
          fullWidth
          id="description"
          name="description"
          label="description"
          type="text"
          value={formik.values.description}
          onChange={formik.handleChange}
          error={formik.touched.description && Boolean(formik.errors.description)}
          helperText={formik.touched.description && formik.errors.description}
        />
        <Button color="primary" variant="contained" fullWidth type="submit" sx={{marginTop:'20px'}}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Form
