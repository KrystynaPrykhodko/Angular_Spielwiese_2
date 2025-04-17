import { createAction, props } from '@ngrx/store';
import { BookH2 } from '../../models/bookH2.model';

export const loadBooksH2 = createAction('[Books] Signal to Load Books');
export const loadBooksH2Success = createAction('[Books H2] Load Books Success', props<{ books: BookH2[] }>());

export const createBookH2 = createAction('[Books H2] Create Book', props<{ book: BookH2 }>());
export const createBookH2Success = createAction('[Books H2] Create Book Success');