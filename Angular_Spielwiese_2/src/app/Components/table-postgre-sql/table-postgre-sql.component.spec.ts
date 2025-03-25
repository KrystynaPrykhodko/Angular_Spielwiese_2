import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePostgreSQLComponent } from './table-postgre-sql.component';

describe('TablePostgreSQLComponent', () => {
  let component: TablePostgreSQLComponent;
  let fixture: ComponentFixture<TablePostgreSQLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablePostgreSQLComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablePostgreSQLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
