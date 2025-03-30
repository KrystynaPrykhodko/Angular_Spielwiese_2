import { createReducer, on } from '@ngrx/store';
import { initialAuthorsState } from './authorsH2.state';
import { loadAuthorsH2Success } from './authorsH2.actions';

//console.log('REDUCER:', initialAuthorsState);

export const authorsH2Reducer = createReducer(
    initialAuthorsState,
    on(loadAuthorsH2Success, 
      (state, { authors }) => ({...state, authors})) 
);
