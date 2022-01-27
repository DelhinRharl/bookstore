/* eslint-disable camelcase */
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeRemote } from '../../redux/Books';

const BookItem = (book) => {
  const {
    item_id, title, category,
  } = book;
  const dispatch = useDispatch();
  const removeBookFromStore = () => {
    dispatch(removeRemote(item_id));
  };
  return (
    <div>
      <span>
        {title}
      </span>
      {category}
      <button type="button" onClick={removeBookFromStore}>Remove</button>
    </div>
  );
};

export default BookItem;
