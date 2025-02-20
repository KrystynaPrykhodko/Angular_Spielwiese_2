
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
    
});