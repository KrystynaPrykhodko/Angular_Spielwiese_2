import { Component, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state'; // Adjust the path as necessary
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { selectAllBooks } from '../../store/books/books.selectors';
import { createBook, editBook, deleteBook } from '../../store/books/books.actions';
import { Book } from '../../models/book.model'; // Adjust the path as necessary

@Component({
  selector: 'app-book-form',
  imports: [ReactiveFormsModule],
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.css'
})
export class BookFormComponent {
  @Output() cancelClicked = new EventEmitter<void>();
  
  bookForm: FormGroup;
  isViewMode: boolean = false;
  isDeleteMode: boolean = false;
  mode: 'CREATE' | 'EDIT' | 'VIEW' | 'DELETE' | null = null;
  bookId?: number;

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
    if (this.bookId) {
      this.loadBookData();
    }
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

  // Lädt Buchdaten aus dem Store
  private loadBookData(): void {
    this.store.select(selectAllBooks).subscribe((books) => {
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
  }

  // Handhabt das Speichern von Daten basierend auf dem Modus
  onSubmit(): void {
    const book = this.getBookFromForm();

    if (this.mode === 'CREATE') {
      this.store.dispatch(createBook({ book }));
    } else if (this.mode === 'EDIT') {
      this.store.dispatch(editBook({ book }));
    }

    this.navigateToTable();
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
      },
      genre: this.bookForm.value.genre,
      price: this.bookForm.value.price,
      }
    
  }; 

  // Navigiert zurück zur Tabelle
  private navigateToTable(): void {
    this.router.navigate(['/']);
  }
  
  // Bricht die aktuelle Aktion ab
  onCancel(): void { 
    this.navigateToTable();
  } 
}
