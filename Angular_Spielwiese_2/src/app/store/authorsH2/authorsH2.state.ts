import { AuthorH2 } from '../../models/authorH2.model';

export interface AuthorsH2State {
  authors: AuthorH2[];
}

export const initialAuthorsState: AuthorsH2State = {
    authors: []
}