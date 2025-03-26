import { createReducer, on } from '@ngrx/store';
import { initialBooksState } from './booksH2.state';
import { loadBooksH2Success } from './booksH2.actions';

//console.log('REDUCER:', initialBooksState);

export const booksH2Reducer = createReducer(
    initialBooksState,
    on(loadBooksH2Success, (state, { books }) => ({
        ...state, 
        books})) 
);