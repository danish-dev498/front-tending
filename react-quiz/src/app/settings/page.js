'use client';

import SelectedField from '@/components/SelectedField';
import TextFieldComp from '@/components/TextFieldComp';
import TextField from '@/components/TextFieldComp';
import useFetch from '@/hooks/useFetch';
import { asyncFetchQuestions } from '@/redux/feature/questionSlice';
import { Box, Button, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//

const Setting = () => {
  console.log("=====api call===")
  // const { response, error, loading } = useFetch({ url: '/api_category.php' });
  const router = useRouter();
  const dispatch=useDispatch()
  const settingCategory= useSelector(state=>state.questions.question_category)

  const { amount_of_question } = useSelector((state) => state.questions);

  useEffect(()=>{
    dispatch(asyncFetchQuestions());
  },[dispatch])

  console.log("=settingCategory==",settingCategory)

  // if (loading) {
  //   return <h1>Loading...</h1>;
  // }

  const difficultyOptions = [
    { id: 'easy', name: 'Easy' },
    { id: 'medium', name: 'Medium' },
    { id: 'hard', name: 'Hard' },
  ];

  const typeOptions = [
    { id: 'multiple', name: 'Multiple Choise' },
    { id: 'boolean', name: 'True/False' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (amount_of_question === 0) {
      return alert('Ops! You forget the Setting');
    }

    router.push('/questions');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '95vh',
      }}
    >
      <Box
        sx={{
          width: {
            xs: 600,
            sm: 600,
            lg: 600, // theme.breakpoints.up('lg')
            xl: 600,
          },
          padding: 1,
        }}
      >
        <form onSubmit={handleSubmit}>
          <Typography sx={{ fontSize: '40px' }}>Settings</Typography>
          <SelectedField select={settingCategory?.trivia_categories} label='Category' />
          <SelectedField select={difficultyOptions} label='Difficulty' />
          <SelectedField select={typeOptions} label='Type' />
          <TextFieldComp />
          <Button
            variant='contained'
            type='submit'
            sx={{ width: '100%', mt: 1 }}
          >
            Get Started
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Setting;
