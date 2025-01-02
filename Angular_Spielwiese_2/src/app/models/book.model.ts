export interface Author {
    id: number;
    name: string;
    birthDate: Date;
    nationality?: string;
  }
  
  export interface Book {
    id: number;
    title: string;
    publicationDate: Date;
    author: Author;
    genre?: string;
    price?: number;
  }