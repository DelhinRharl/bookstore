/* eslint-disable camelcase */
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const FETCH_BOOK = 'bookStore/books/FETCH_BOOK';

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const fetchBook = (payload) => ({
  type: FETCH_BOOK,
  payload,
});

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/1ACApRNEuGr2czHzTboo/books';

export const addRemote = (payload) => async (dispatch) => {
  const books = await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  console.log(books);
  dispatch(addBook(payload));
};

export const fetchRemote = () => async (dispatch) => {
  const books = await fetch(url);
  const data = await books.json();
  const displayBooks = Object.entries(data).map(([item_id, book]) => {
    const { category, title } = book[0];
    return {
      item_id,
      category,
      title,
    };
  });
  dispatch(fetchBook(displayBooks));
};

export const removeRemote = (item_id) => async (dispatch) => {
  const books = await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/1ACApRNEuGr2czHzTboo/books/${item_id}`, {
    method: 'DELETE',
  });
  console.log(books, item_id);
  dispatch(removeBook(item_id));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload);
    case FETCH_BOOK:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
