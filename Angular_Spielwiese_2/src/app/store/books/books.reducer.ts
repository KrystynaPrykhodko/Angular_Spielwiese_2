import { createReducer, on } from '@ngrx/store';
import { initialBooksState } from './books.state';
import { createBook, editBook, deleteBook } from './books.actions';

// Debugging: Initial Books State loggen
console.log('REDUCER:', initialBooksState);

// Reducer ohne spezifische Aktionen
export const booksReducer = createReducer(
  initialBooksState, // Übergibt den initialen Zustand

  on(createBook, (state, { book }) => ({ 
    ...state, 
    books: [...state.books, book] })),

    on(editBook, (state, { book }) => ({
      ...state,
      books: state.books.map((b) => (b.id === book.id ? { ...b, ...book } : b)),
    })),

    on(deleteBook, (state, { bookId }) => ({
      ...state,
      books: state.books.filter((b) => b.id !== bookId),
    }))
);