import { BookH2 } from '../../models/bookH2.model';

export interface BooksH2State {
  books: BookH2[];
}

export const initialBooksState: BooksH2State = {
    books: []
}