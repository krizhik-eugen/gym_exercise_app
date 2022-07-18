import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography, Pagination } from '@mui/material';
import { exerciseOption, fetchData } from '../utils/fetchData';
import ExerciseCard from '../components/ExerciseCard';

const Exercises = ({ bodyPart, exercises, setExercises }) => {
  const exercisesPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  useEffect(() => {
    let exerciseData = [];
    const fetchExercisesData = async () => {
      if (bodyPart === 'all') {
        exerciseData = await fetchData(
          'https://exercisedb.p.rapidapi.com/exercises',
          exerciseOption
        );
      } else {
        exerciseData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOption
        );
      }
      setExercises(exerciseData);
    };
    fetchExercisesData();
  }, [bodyPart]);

  return (
    <Box id='exercises' sx={{ mt: { lg: '110px' } }} mt='20px' p='20px'>
      <Typography variant='h3' mb='46px' fontWeight={700}>
        Showing results
      </Typography>
      <Stack
        direction='row'
        sx={{ gap: { lg: '110px', xs: '50px' } }}
        flexWrap='wrap'
        justifyContent='center'
      >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt='100px' alignItems='center'>
        {exercises.length > exercisesPerPage && (
          <Pagination
            color='standard'
            shape='rounded'
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            size='large'
            onChange={paginate}
            page={currentPage}
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
