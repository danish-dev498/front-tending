import { handleChangeAmmount } from '@/redux/feature/questionSlice';
import { FormControl, TextField } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';

const TextFieldComp = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(handleChangeAmmount(event.target.value));
  };

  return (
    <div>
      <FormControl sx={{ width: '100%', mt: 1 }}>
        <TextField
          id='outlined-basic'
          label='Ammount of questions'
          variant='outlined'
          type='number'
          onChange={handleChange}
        />
      </FormControl>
    </div>
  );
};

export default TextFieldComp;
