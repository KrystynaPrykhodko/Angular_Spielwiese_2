import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BooksH2State } from './booksH2.state';

export const selectBooksH2State = createFeatureSelector<BooksH2State>('booksH2');

export const selectAllBooksH2 = createSelector(
    selectBooksH2State,
    (state) => state.books
);