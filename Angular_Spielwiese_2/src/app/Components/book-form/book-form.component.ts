import { Component, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state'; // Adjust the path as necessary
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { selectAllBooks } from '../../store/books/books.selectors';

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

  

  constructor(
    private fb: FormBuilder, 
    private route: ActivatedRoute,
    private store: Store<AppState>
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
            if (currentPath?.startsWith('view')) {
              this.isViewMode = true;
              this.bookForm.disable(); // Form deaktivieren im Ansicht-Modus
            }
          }
        });
      }
    });
  }

  onSubmit(): void {
    if (this.isViewMode) return; // Keine Aktionen im Ansicht-Modus
    console.log('Formular abgeschickt:', this.bookForm.value);
  }

  onCancel(): void {
    this.cancelClicked.emit();
  }
}
