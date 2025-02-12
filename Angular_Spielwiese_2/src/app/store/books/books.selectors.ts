import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BooksState } from './books.state';

// Selektiere den gesamten Books-State
export const selectBooksState = createFeatureSelector<BooksState>('books');

export const selectAllBooks = createSelector(
  selectBooksState,
  (state) => state.books
);

export  const selectAllAuthors = createSelector(
  selectBooksState,
  (state) => state.books.map((book) => book.author)
);