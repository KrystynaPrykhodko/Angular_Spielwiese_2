import { createAction, props } from '@ngrx/store';
import { Book } from '../../models/book.model';

export const loadBooks = createAction('[Books] Load Books');
export const createBook = createAction('[Books] Create Book', props<{ book: Book }>());
export const editBook = createAction('[Books] Edit Book', props<{ book: Book }>());
export const deleteBook = createAction('[Books] Delete Book', props<{ bookId: number }>())