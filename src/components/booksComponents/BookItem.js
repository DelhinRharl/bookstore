/* eslint-disable camelcase */
import React from 'react';
import { useDispatch } from 'react-redux';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { removeRemote } from '../../redux/Books';

const BookItem = (book) => {
  const {
    item_id, title, category,
  } = book;
  const dispatch = useDispatch();
  const removeBookFromStore = () => {
    dispatch(removeRemote(item_id));
  };
  const percentage = Math.floor(Math.random() * 80);
  return (
    <div className="book-item">
      <div className="container">
        <div className="category">
          {category}
        </div>
        <div className="title">
          {title}
        </div>
        <div className="remove-bar">
          <button type="button" className="comment">Comments</button>
          <button type="button" className="remove" onClick={removeBookFromStore}>Remove</button>
          <button type="button" className="edit">Edit</button>
        </div>
      </div>
      <div className="ring">
        <CircularProgressbar
          value={percentage}
          styles={buildStyles({
            rotation: 0.25,
            strokeLinecap: 'butt',
            pathTransitionDuration: 0.5,
            pathColor: `rgba(2, 144, 255, ${percentage / 80})`,
            textColor: '#f88',
            trailColor: '#ebebeb',
            backgroundColor: '#0290ff',
          })}
          className="progress"
        />
        <div className="percentage">
          <p className="perc">
            {percentage}
            %
          </p>
          <p className="completed">Completed</p>
        </div>
      </div>
      <div className="chapter">
        <p className="current">CURRENT CHAPTER</p>
        <p className="c-chapter">
          Chapter
          {' '}
          { `${Math.floor(Math.random() * 40)}`}
          :
          {' '}
        </p>
        <button type="button" className="update">UPDATE SCORE</button>
      </div>
    </div>
  );
};

export default BookItem;
