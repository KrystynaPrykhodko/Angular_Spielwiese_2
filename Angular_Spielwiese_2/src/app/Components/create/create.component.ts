import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create',
  imports: [],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  @Output () createClicked = new EventEmitter<void>();

  onCreate(): void {
    this.createClicked.emit();
  }
}
