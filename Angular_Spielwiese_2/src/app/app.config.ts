import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { booksReducer } from './store/books/books.reducer';
import { booksH2Reducer } from './store/booksH2/booksH2.reducer'; 
import { authorsH2Reducer } from './store/authorsH2/authorsH2.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { BooksH2Effects } from './store/booksH2/booksH2.effects';

import { BookFormComponent } from './Components/book-form/book-form.component';
import { TableComponent } from './Components/table/table.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ArchiveComponent } from './Components/archive/archive.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { AuthorsComponent } from './Components/authors/authors.component';
import { CommentsComponent } from './Components/comments/comments.component';
import { ImpressumComponent } from './Components/impressum/impressum.component';
import { TablePostgreSQLComponent } from './Components/table-postgre-sql/table-postgre-sql.component';
import { TableH2Component } from './Components/table-h2/table-h2.component';
import { AuthorsH2Effects } from './store/authorsH2/authorsH2.effects';


export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter([
      { path: '', component: HomepageComponent },
      { path: 'create', component: BookFormComponent },
      { path: 'edit/:bookId', component: BookFormComponent },
      { path: 'view/:bookId', component: BookFormComponent },
      { path: 'delete/:bookId', component: BookFormComponent },
      { path: 'archive', component: ArchiveComponent },
      { path: 'homepage', component: HomepageComponent },
      { path: 'books', component: TableComponent },
      { path: 'booksH2', component: TableH2Component },
      { path: 'booksPostgeSQL', component: TablePostgreSQLComponent },
      { path: 'authors', component: AuthorsComponent},
      { path: 'comments', component: CommentsComponent },
      { path: 'impressum', component: ImpressumComponent },
      { path: '**', redirectTo: 'homepage' },
      
    ]),
    // Registriert den booksReducer und den booksH2Reducer
    provideStore({ 
      books: booksReducer,
      booksH2: booksH2Reducer,
      authorsH2: authorsH2Reducer
    }),
    // Fügt die Redux DevTools hinzu  // für DEBUGGING
    provideEffects(BooksH2Effects, AuthorsH2Effects),
    provideStoreDevtools(), 
    provideAnimationsAsync(), 
  ],
};