import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HamburgerComponent } from "./components/hamburger/hamburger.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent, HamburgerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isSidebarOpen = false;

  toggleSidebar() : void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
} 
