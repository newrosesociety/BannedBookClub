import React from 'react';
import { Container, Typography } from '@mui/material';
import BookCard from './components/BookCard';

const App = () => {
  const books = [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      cover: "TKAM.jpg",
      details: "A coming-of-age story set in the South during the 1930s, dealing with serious issues of race and injustice."
    },
    {
      title: "1984",
      author: "George Orwell",
      cover: "1984.jpg",
      details: "A dystopian novel that explores the dangers of totalitarianism and extreme political ideology."
    },
    // Add more banned books as needed
  ];

  return (
    <Container>
      <Typography variant="h2" align="center" gutterBottom>
        Banned Books
      </Typography>
      {books.map((book, index) => (
        <BookCard 
          key={index} 
          title={book.title} 
          author={book.author} 
          cover={book.cover} 
          details={book.details} 
        />
      ))}
    </Container>
  );
};

export default App;