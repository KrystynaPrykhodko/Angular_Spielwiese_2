import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPostgreSQLComponent } from './book-postgre-sql.component';

describe('BookPostgreSQLComponent', () => {
  let component: BookPostgreSQLComponent;
  let fixture: ComponentFixture<BookPostgreSQLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookPostgreSQLComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookPostgreSQLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
