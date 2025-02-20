
import { TestBed } from '@angular/core/testing';
import { SidebarComponent } from './sidebar.component';
import { By } from '@angular/platform-browser';

describe('SidebarComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [SidebarComponent],
        }).compileComponents();
    });
    
    it('should render the component', () => {
        const fixture = TestBed.createComponent(SidebarComponent);
        fixture.detectChanges();
        expect(fixture.componentInstance).toBeTruthy();
    });

    // Tests, ob die Inhalte auf Sidebar angezeigt werden -> Material steuert das Verhalten SELBST über die KLasse `mat-drawer-opened`

    it('should NOT display the sidebar when isOpen is true', () => {
        const fixture = TestBed.createComponent(SidebarComponent);
        fixture.componentInstance.isOpen = true; // Da `opened="!isOpen"` → Sidebar sollte geschlossen sein
        fixture.detectChanges();

        const sidenavElement = fixture.debugElement.query(By.css('mat-sidenav'));
        expect(sidenavElement).toBeTruthy(); // Stellt sicher, dass das Element existiert
        expect(sidenavElement.nativeElement.classList).not.toContain('mat-drawer-opened'); // Sollte geschlossen sein 
    });

    it('should display the sidebar when isOpen is false', () => {
        const fixture = TestBed.createComponent(SidebarComponent);
        fixture.componentInstance.isOpen = false; // Da `opened="!isOpen"` → Sidebar sollte offen sein
        fixture.detectChanges();
    
        const sidenavElement = fixture.debugElement.query(By.css('mat-sidenav'));
        expect(sidenavElement).toBeTruthy(); // Element existiert
        expect(sidenavElement.nativeElement.classList).toContain('mat-drawer-opened'); // Sollte offen sein
    });    
});