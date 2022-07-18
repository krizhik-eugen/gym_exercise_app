import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Loader from './Loader';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <Loader />;
  return (
    <Box sx={{ marginTop: { ls: '200px', xs: '20px' } }} p='20px'>
      <Typography variant='h3' mb='33px'>
        Watch{' '}
        <span style={{ color: '#ff2625', textTransform: 'capitalize' }}>
          {name}
        </span>{' '}
        exercise video
      </Typography>
      <Stack
        justifyContent='flex-start'
        flexWrap='wrap'
        alignItems='center'
        sx={{ flexDirection: { lg: 'row' }, gap: { lg: '110px', xs: '20px' } }}
      >
        {exerciseVideos?.slice(0, 6).map((item, index) => (
          <a
            key={index}
            className='exercise-video'
            href={`https://youtube.com/watch?v=${item.video.videoId}`}
            target='_blank'
            rel='noreferrer'
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Typography variant='h5' color='#000'>
              {item.video.title}
            </Typography>
            <Typography variant='h6' color='#000'>
              {item.video.channelName}
            </Typography>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
