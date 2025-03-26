import { Component, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { selectAllBooks, selectAllAuthors } from '../../store/books/books.selectors';
import { createBook, editBook, deleteBook } from '../../store/books/books.actions';
import { Book } from '../../models/book.model';

import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatOptionModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';


@Component({
  selector: 'app-book-form',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatIconModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatOptionModule,
    MatNativeDateModule,
    MatSelectModule
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'de-DE' }],
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css'],
})
export class BookFormComponent implements OnDestroy {
  
  @Output() cancelClicked = new EventEmitter<void>();
  private subscriptions: Subscription = new Subscription();
  
  bookForm: FormGroup;
  isViewMode: boolean = false;
  isDeleteMode: boolean = false;
  mode: 'CREATE' | 'EDIT' | 'VIEW' | 'DELETE' | null = null;
  bookId?: number;

  authors: { id: number; name: string; birthDate: Date }[] = [];

  constructor(
    private fb: FormBuilder, 
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private router: Router
  ) {
    this.bookForm = this.initializeForm();
  }

  ngOnInit(): void {
    this.setupMode();
    this.loadAuthors();
    if (this.bookId) {
      this.loadBookData();
    }
  }

  ngOnDestroy(): void {
    //console.log("BookFormComponent destroyed");
    this.subscriptions.unsubscribe();
  }

  // Initialisiert das Formular
  private initializeForm(): FormGroup {
    return this.fb.group({
      title: ['', Validators.required],
      publicationDate: [null, Validators.required],
      authorName: ['', Validators.required],
      genre: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
    });
  }

  // Setzt den Modus und lädt die Buch-ID, falls vorhanden
  private setupMode(): void {
    const path = this.route.snapshot.routeConfig?.path;
    this.bookId = Number(this.route.snapshot.paramMap.get('bookId'));

    if (path === 'create') {
      this.mode = 'CREATE';
    } else if (path === 'edit/:bookId') {
      this.mode = 'EDIT';
    } else if (path === 'view/:bookId') { 
      this.mode = 'VIEW';
      this.isViewMode = true;
      this.bookForm.disable(); // Form deaktivieren im Ansicht-Modus
    } else if (path === 'delete/:bookId') {
      this.mode = 'DELETE';
    }
  }

  private loadAuthors(): void {
    const authorsSub = this.store.select(selectAllAuthors).subscribe((authors) => {
      this.authors = authors;
    });
    this.subscriptions.add(authorsSub);
  }

  // Lädt Buchdaten aus dem Store
  private loadBookData(): void {
    const booksSub= this.store.select(selectAllBooks).subscribe((books) => {
      const book = books.find((b) => b.id === this.bookId);
      if (book) {
        this.bookForm.patchValue({
          title: book.title,
          publicationDate: book.publicationDate,
          authorName: book.author.name,
          genre: book.genre,
          price: book.price,
        });
      }
    });
    this.subscriptions.add(booksSub);
  }

  // Handhabt das Speichern von Daten basierend auf dem Modus
  onSubmit(): void {
    const book = this.getBookFromForm();

    if (this.mode === 'CREATE') {
      this.store.dispatch(createBook({ book }));
      this.navigateToTable();
    } else if (this.mode === 'EDIT') {
      this.store.dispatch(editBook({ book }));
      this.navigateToTable();
    } else if (this.mode === 'DELETE') {
      this.isDeleteMode = true;
    } 
  }

  // Löscht das Buch im DELETE-Modus
  confirmDelete(): void {
    if (this.mode === 'DELETE' && this.bookId) {  
      this.store.dispatch(deleteBook({ bookId: this.bookId }));
      this.navigateToTable();
    }
  }
  
  // Extrahiert BUchdaten aus dem Formular
  private getBookFromForm(): Book {
    return {  
      id: this.mode === 'CREATE' ? Math.floor(Math.random() * 1000) : this.bookId!,
      title: this.bookForm.value.title,
      publicationDate: this.bookForm.value.publicationDate, 
      author: {
        id: Math.floor(Math.random() * 1000),
        name: this.bookForm.value.authorName,
        birthDate: new Date(),
        nationality: 'Unknown', // Add a default or form value for nationality
      },
      genre: this.bookForm.value.genre,
      price: this.bookForm.value.price,
      }
    
  }; 

  // Navigiert zurück zur Tabelle
  private navigateToTable(): void {
    this.router.navigate(['/books']);
  }
  
  // Bricht die aktuelle Aktion ab
  onCancel(): void { 
    this.navigateToTable();
  } 
}