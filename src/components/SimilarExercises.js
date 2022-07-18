import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import HorizontalScrollBar from './HorizontalScrollBar';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: '100px', xs: '0' } }}>
      <Typography
        sx={{
          fontSize: { lg: '44px', xs: '25px' },
          ml: '20px',
          mt: { lg: '100px', xs: '60px' },
        }}
        fontWeight={700}
        color='#000'
        mb='33px'
      >
        Exercises that target the same muscle group
      </Typography>
      <Stack direction='row' sx={{ p: 2, position: 'relative' }}>
        {targetMuscleExercises.length ? (
          <HorizontalScrollBar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography
        sx={{
          fontSize: { lg: '44px', xs: '25px' },
          ml: '20px',
          mt: { lg: '100px', xs: '60px' },
        }}
        fontWeight={700}
        color='#000'
        mb='33px'
      >
        Equipment that use the same equipment
      </Typography>
      <Stack direction='row' sx={{ p: 2, position: 'relative' }}>
        {equipmentExercises.length ? (
          <HorizontalScrollBar data={equipmentExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
