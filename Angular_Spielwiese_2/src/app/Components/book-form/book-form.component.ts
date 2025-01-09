import { Component, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state'; // Adjust the path as necessary
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { selectAllBooks } from '../../store/books/books.selectors';
import { createBook, editBook, deleteBook } from '../../store/books/books.actions';

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

  constructor(
    private fb: FormBuilder, 
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private router: Router
  ) {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      publicationDate: [null, Validators.required],
      authorName: ['', Validators.required],
      genre: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const bookId = params.get('bookId');
      const currentPath = this.route.snapshot.routeConfig?.path;

      if (currentPath === 'create') {
        // CREATE: Initialisiere leeres Buch
        this.bookForm.reset({
          title: 'Neues Buch',
          publicationDate: null,
          authorName: 'Max Mustermann',
          genre: '',
          price: 0,
        });
      } else if (bookId) {
        // VIEW oder EDIT: Buch laden
        this.store.select(selectAllBooks).subscribe((books) => {
          const book = books.find((b) => b.id === Number(bookId));
          if (book) {
            this.bookForm.patchValue({
              title: book.title,
              publicationDate: book.publicationDate,
              authorName: book.author.name,
              genre: book.genre,
              price: book.price,
            });
            if (currentPath === 'view/:bookId') {
              this.isViewMode = true;
              this.bookForm.disable(); // Form deaktivieren im Ansicht-Modus
            }
            if (currentPath === 'delete/:bookId'){
              this.isDeleteMode = true;
            }
          }
        });
      }
    });
  }

  onSubmit(): void {
    if (this.isViewMode) return; // Keine Aktionen im Ansicht-Modus
    console.log('Formular abgeschickt:', this.bookForm.value);

    const currentPath = this.route.snapshot.routeConfig?.path;

    const newBook = {
      id: Math.floor(Math.random() * 1000),
      title: this.bookForm.value.title,
      publicationDate: this.bookForm.value.publicationDate,
      author: { 
        id: Math.floor(Math.random() * 1000),
        name: this.bookForm.value.authorName,
        birthDate: new Date() // or any default date
      },
      genre: this.bookForm.value.genre,
      price: this.bookForm.value.price,
    };

    const existBook = {
      id: Number(this.route.snapshot.paramMap.get('bookId')),
      title: this.bookForm.value.title,
      publicationDate: this.bookForm.value.publicationDate,
      author: { 
        id: this.bookForm.value.authorId,
        name: this.bookForm.value.authorName,
        birthDate: new Date() // or any default date
      },
      genre: this.bookForm.value.genre,
      price: this.bookForm.value.price,
    };

    if (currentPath === 'create') {
      this.store.dispatch(createBook({ book: newBook }));
      this.router.navigate(['/']);
    } else if (currentPath === 'edit/:bookId') {
      this.store.dispatch(editBook({ book: existBook }));
      this.router.navigate(['/']);
    }
  }

  confirmDelete(): void {
    const bookId = Number(this.route.snapshot.paramMap.get('bookId'));
    this.store.dispatch(deleteBook({ bookId }));
    this.router.navigate(['/']); // Zurück zur Tabelle
  }
  cancelDelete(): void {
    this.router.navigate(['/']);
  }

  onCancel(): void {
    this.cancelClicked.emit();
    this.router.navigate(['/']);
  }
}
