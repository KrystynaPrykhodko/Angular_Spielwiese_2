import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-hamburger',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './hamburger.component.html',
  styleUrl: './hamburger.component.css'
})
export class HamburgerComponent {
  @Output() toggle = new EventEmitter<void>();
  
  onToggle(): void {
    this.toggle.emit();   
  }
}
