import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { exerciseOption, fetchData } from '../utils/fetchData';
import ExerciseCard from '../components/ExerciseCard';

const Exercises = ({ bodyPart, exercises, setExercises }) => {
  console.log('exercises', exercises);
  return (
    <Box id='exercises' sx={{ mt: { lg: '110px' } }} mt='20px' p='20px'>
      <Typography variant='h3' mb='46px'>
        Showing results
      </Typography>
      <Stack
        direction='row'
        sx={{ gap: { lg: '110px', xs: '50px' } }}
        flexWrap='wrap'
        justifyContent='center'
      >
        {exercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
    </Box>
  );
};

export default Exercises;
