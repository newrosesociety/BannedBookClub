import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const BookCard = ({ title, author, coverImage, details }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: '20px' }}>
      <CardMedia
        component="img"
        height="140"
        image={coverImage}
        alt={`${title} cover`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {author}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginTop: '10px' }}>
          {details}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BookCard;