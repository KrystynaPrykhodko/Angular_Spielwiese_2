import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hamburger',
  imports: [],
  templateUrl: './hamburger.component.html',
  styleUrl: './hamburger.component.css'
})
export class HamburgerComponent {
  @Output() toggle = new EventEmitter<void>();
  
  onToggle(): void {   console.log('Hamburger klicked');
    this.toggle.emit();   
  }
}
