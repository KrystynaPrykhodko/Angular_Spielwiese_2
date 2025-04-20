import { createAction, props } from '@ngrx/store';
import { BookH2 } from '../../models/bookH2.model';

export const loadBooksH2 = createAction('[Books] Signal to Load Books');
export const loadBooksH2Success = createAction('[Books H2] Load Books Success', props<{ books: BookH2[] }>());

export const createBookH2 = createAction('[Books H2] Create Book', props<{ book: BookH2 }>());
export const createBookH2Success = createAction('[Books H2] Create Book Success');
export const createBookH2Failure = createAction('[Books H2] Create Book Failure', props<{ error: any }>());

export const deleteBookH2 = createAction('[Books H2] Delete Book', props<{ bookId: number }>());
export const deleteBookH2Success = createAction('[Books H2] Delete Book Success');
export const deleteBookH2Failure = createAction('[Books H2] Delete Book Failure', props<{ error: any }>());

export const editBookH2 = createAction('[Books H2] Edit Book', props<{ book: BookH2 }>());
export const editBookH2Success = createAction('[Books H2] Edit Book Success');  
export const editBookH2Failure = createAction('[Books H2] Edit Book Failure', props<{ error: any }>());