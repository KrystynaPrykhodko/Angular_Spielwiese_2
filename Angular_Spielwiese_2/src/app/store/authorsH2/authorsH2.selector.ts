import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthorsH2State } from './authorsH2.state';

export const selectAuthorsH2State = createFeatureSelector<AuthorsH2State>('authorsH2');

export const selectAllAuthorsH2 = createSelector(
    selectAuthorsH2State,
    (state) => state.authors
);