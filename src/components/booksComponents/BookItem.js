import React from 'react';

const BookItem = (book) => {
  const { id, title, author } = book;
  return (
    <div id={id}>
      <h3>{title}</h3>
      <p>{author}</p>
      <button type="button">Delete</button>
    </div>
  );
};

export default BookItem;
