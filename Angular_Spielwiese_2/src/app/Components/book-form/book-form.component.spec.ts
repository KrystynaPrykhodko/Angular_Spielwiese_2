import { TestBed } from "@angular/core/testing";
import { Router } from "@angular/router";
import { provideRouter } from "@angular/router";
import { provideStore } from "@ngrx/store";
import { booksReducer } from "../../store/books/books.reducer";
import { provideNoopAnimations } from "@angular/platform-browser/animations";
import { provideHttpClient } from "@angular/common/http";
import { BookFormComponent } from "./book-form.component";
import { MatButtonModule } from "@angular/material/button";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";


describe('BookFormComponent', () => {
    let fixture: any;
    let component: BookFormComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: 
            [
                BookFormComponent,
                MatButtonModule,
                ReactiveFormsModule,
                FormsModule
            ],
            providers: [
                provideStore(
                                { books: booksReducer },
                                { 
                                    initialState: {
                                        books: {
                                            books: 
                                            [
                                                {
                                                    id: 1,
                                                    title: "Angular for Beginners",
                                                    publicationDate: new Date("2020-01-01"),
                                                    author: { id: 1, name: "John Doe", birthDate: new Date("1980-05-05") },
                                                    genre: "Tutorial",
                                                    price: 29.99,
                                                },
                                                {
                                                    id: 2,
                                                    title: "Advanced Angular",
                                                    publicationDate: new Date("2023-04-15"),
                                                    author: { id: 2, name: "Jane Smith", birthDate: new Date("1975-09-10") },
                                                    genre: "Programming",
                                                    price: 39.99,
                                                },
                                            ],
                                        }
                                    } 
                                }
                                ),
                provideRouter([]),
                provideHttpClient(),
                provideNoopAnimations(),
            ],
        }).compileComponents();
    });

    it('should render the component', () => {
        fixture = TestBed.createComponent(BookFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });
});

