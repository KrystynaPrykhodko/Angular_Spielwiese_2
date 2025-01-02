import { createReducer } from '@ngrx/store';
import { initialBooksState } from './books.state';

// Debugging: Initial Books State loggen
console.log('REDUCER:', initialBooksState);

// Reducer ohne spezifische Aktionen
export const booksReducer = createReducer(
  initialBooksState // Übergibt den initialen Zustand
);