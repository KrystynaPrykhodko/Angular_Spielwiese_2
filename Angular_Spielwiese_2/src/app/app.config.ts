import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { booksReducer } from './store/books/books.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { BookFormComponent } from './components/book-form/book-form.component';
import { TableComponent } from './components/table/table.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter([
      { path: '', component: TableComponent },
      { path: 'create', component: BookFormComponent },
      { path: 'edit/:bookId', component: BookFormComponent },
      { path: 'view/:bookId', component: BookFormComponent },
      { path: 'delete/:bookId', component: BookFormComponent },
      
    ]),
    provideStore({ books: booksReducer }), // Registriere den booksReducer
    provideStoreDevtools(), provideAnimationsAsync(), provideAnimationsAsync(), // Fügt die Redux DevTools hinzu  // für DEBUGGING
  ],
};
