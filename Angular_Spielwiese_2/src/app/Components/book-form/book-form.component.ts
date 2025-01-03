import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book-form',
  imports: [],
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.css'
})
export class BookFormComponent {
  @Output() cancelClicked = new EventEmitter<void>();

  onCancel(): void {
    this.cancelClicked.emit();
  }
}
