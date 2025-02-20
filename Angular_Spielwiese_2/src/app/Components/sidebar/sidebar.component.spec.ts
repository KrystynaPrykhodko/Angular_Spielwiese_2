
import { TestBed } from '@angular/core/testing';
import { SidebarComponent } from './sidebar.component';

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

    it('shoud not have "open" when isOpen is false', () => {
        const fixture = TestBed.createComponent(SidebarComponent);
        fixture.componentInstance.isOpen = false; // setzt Open explizit auf false
        fixture.detectChanges(); // aktualisiert JSDOM

        const sidebarElement = fixture.nativeElement.querySelector('.sidebar');
        expect(sidebarElement.classList).not.toContain('open'); // sollte die "open"-Klasse NICHT enthalten

    });
});