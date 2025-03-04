import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { booksReducer } from './store/books/books.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { BookFormComponent } from './Components/book-form/book-form.component';
import { TableComponent } from './Components/table/table.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ArchiveComponent } from './Components/archive/archive.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { AuthorsComponent } from './Components/authors/authors.component';
import { CommentsComponent } from './Components/comments/comments.component';
import { ImpressumComponent } from './Components/impressum/impressum.component';
import { BookPostgreSQLComponent } from './book-postgre-sql/book-postgre-sql.component';


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
      { path: 'booksPostgeSQL', component: BookPostgreSQLComponent },
      { path: 'authors', component: AuthorsComponent},
      { path: 'comments', component: CommentsComponent },
      { path: 'impressum', component: ImpressumComponent },
      { path: '**', redirectTo: 'homepage' },
      
    ]),
    provideStore({ books: booksReducer }), // Registriere den booksReducer
    provideStoreDevtools(), provideAnimationsAsync(), // Fügt die Redux DevTools hinzu  // für DEBUGGING
  ],
};
