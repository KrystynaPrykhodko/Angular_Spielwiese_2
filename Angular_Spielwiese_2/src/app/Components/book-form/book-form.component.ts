import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-form',
  imports: [ReactiveFormsModule],
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.css'
})
export class BookFormComponent {
  @Input() book: any;
  @Output() cancelClicked = new EventEmitter<void>();

  onSubmit(): void {
    console.log('Formular abgeschickt:', this.bookForm.value);
  } 

  bookForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      publicationDate: [null, Validators.required],
      authorName: ['', Validators.required],
      genre: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called', changes);  // Debugging

    if (changes['book'] && changes['book'].currentValue) {
      this.bookForm.patchValue({
        title: this.book.title,
        publicationDate: this.book.publicationDate,
        authorName: this.book.author.name,
        genre: this.book.genre,
        price: this.book.price,
      });
    }
  }

  onCancel(): void {
    this.cancelClicked.emit();
  }
}
