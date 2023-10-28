import { FETCH_BOOKS_SUCCESS, SORT_BOOKS } from './actionTypes';

export const fetchBooksSuccess = (books) => {
  return { type: FETCH_BOOKS_SUCCESS, payload: books };
};

export const sortBooks = (sortBy) => {
  return { type: SORT_BOOKS, payload: sortBy };
};
