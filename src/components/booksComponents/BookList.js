import React from 'react';
import BookItem from './BookItem';

const BookList = () => {
  const bookArr = [
    {
      title: 'bookname',
      author: 'author',
      id: 1,
    },
    {
      title: 'bookname',
      author: 'author',
      id: 1,
    },
    {
      title: 'bookname',
      author: 'author',
      id: 1,
    },
  ];

  return (
    <div>
      <h2>Books list</h2>
      {
        bookArr.map((book) => {
          const { title, author, id } = book;
          return (
            <BookItem
              title={title}
              author={author}
              key={id}

            />
          );
        })
      }
    </div>
  );
};

export default BookList;
