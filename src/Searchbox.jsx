import { useContext } from 'react';
import LocationContext from './LocationContext';
import { Box, TextField, Button } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
  searchItem: yup.string('Enter Country'),
});

const Searchbox = () => {

  const {searchLocation} = useContext(LocationContext)
  const formik = useFormik({
    initialValues: {
      searchItem: '',
    },
    validationSchema,
    onSubmit: (values) => {
      searchLocation(values)
      // console.log(values);
    },
  });

  return (
    <Box>
      <Box component={'form'} onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id='searchItem'
          name='searchItem'
          label='SearchItem'
          value={formik.values.searchItem}
          onChange={formik.handleChange}
        />
      </Box>
      <Box sx={{ marginTop: '12px' }}>
        <Button variant='contained' fullWidth type='submit'>
          Search
        </Button>
      </Box>
    </Box>
  );
};

export default Searchbox;
