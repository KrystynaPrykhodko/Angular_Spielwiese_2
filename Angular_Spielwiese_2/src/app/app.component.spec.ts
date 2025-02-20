import { render } from '@testing-library/angular';
import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { HamburgerComponent } from './Components/hamburger/hamburger.component';

describe('AppComponent', () => {
  it('should render the component', async () => {
    const { container } = await render(AppComponent, {
      imports: [RouterOutlet, SidebarComponent, HamburgerComponent],
    });

    expect(container).toBeTruthy(); // Prüft, ob die Komponente gerendert wurde
  });
});
