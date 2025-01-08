import { Component, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-form',
  imports: [ReactiveFormsModule],
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.css'
})
export class BookFormComponent {
  @Output() cancelClicked = new EventEmitter<void>();

  onSubmit(): void {
    console.log('Formular abgeschickt:', this.bookForm.value);
  } 

  bookForm: FormGroup;

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      publicationDate: [null, Validators.required],
      authorName: ['', Validators.required],
      genre: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params['title']) {
        this.bookForm.patchValue({ 
          id: params['id'],
          title: params['title'], 
          publicationDate: params['publicationDate'],
          authorName: params['authorName'],
          genre: params['genre'],
          price: params['price']
        });
      }
    });
  }

  onCancel(): void {
    this.cancelClicked.emit();
  }
}
