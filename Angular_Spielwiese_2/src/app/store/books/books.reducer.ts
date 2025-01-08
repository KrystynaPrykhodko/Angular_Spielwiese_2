import { createReducer, on } from '@ngrx/store';
import { initialBooksState } from './books.state';
import { createBook } from './books.actions';

// Debugging: Initial Books State loggen
console.log('REDUCER:', initialBooksState);

// Reducer ohne spezifische Aktionen
export const booksReducer = createReducer(
  initialBooksState, // Übergibt den initialen Zustand

  on(createBook, (state, { book }) => ({ 
    ...state, 
    books: [...state.books, book] })), // Fügt ein Buch hinzu
);