import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BooksState } from './books.state';

// Selektiere den gesamten Books-State
export const selectBooksState = createFeatureSelector<BooksState>('books');

// Selektiere die Bücher aus dem State
export const selectAllBooks = createSelector(
  selectBooksState,
  (state) => state.books
);