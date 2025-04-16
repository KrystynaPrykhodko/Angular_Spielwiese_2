import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-button-h2',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './button-h2.component.html',
  styleUrls: ['./button-h2.component.css']
})
export class ButtonComponentH2 {
  constructor(private router: Router) {}

  createBook(): void {  
    this.router.navigate(['/createH2']);
  }
}
