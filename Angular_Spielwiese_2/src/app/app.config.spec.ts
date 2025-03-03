import { TestBed } from "@angular/core/testing";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { provideRouter } from "@angular/router";
import { provideStore } from "@ngrx/store";
import { booksReducer } from "./store/books/books.reducer";
import { provideNoopAnimations } from "@angular/platform-browser/animations";
import { provideHttpClient } from "@angular/common/http";
import { OpenAPIService } from "./services/openAPI.service";

import { HomepageComponent } from "./Components/homepage/homepage.component";
import { BookFormComponent } from "./Components/book-form/book-form.component";
import { TableComponent } from "./Components/table/table.component";
import { AuthorsComponent } from "./Components/authors/authors.component";
import { CommentsComponent } from "./Components/comments/comments.component";
import { ImpressumComponent } from "./Components/impressum/impressum.component";
import { ArchiveComponent } from "./Components/archive/archive.component";


describe('Routing Tests', () => {
    let router: Router;
    let location: Location;
    let fixture: any;
    
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            providers: [
                provideRouter([
                    { path: '', component: HomepageComponent },
                    { path: 'create', component: BookFormComponent },
                    { path: 'edit/:bookId', component: BookFormComponent },
                    { path: 'view/:bookId', component: BookFormComponent },
                    { path: 'delete/:bookId', component: BookFormComponent },
                    { path: 'archive', component: ArchiveComponent },
                    { path: 'homepage', component: HomepageComponent },
                    { path: 'books', component: TableComponent },
                    { path: 'authors', component: AuthorsComponent },
                    { path: 'comments', component: CommentsComponent },
                    { path: 'impressum', component: ImpressumComponent },
                    { path: '**', redirectTo: 'homepage' },
                ]),
                provideStore(
                    { books: booksReducer },
                    { 
                        initialState: {
                        books: {
                            books: [
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
                provideNoopAnimations(), // Deaktiviert Animationen für Tests
                provideHttpClient(), // Fügt HttpClient als Provider hinzu
                OpenAPIService, // Stellt sicher, dass OpenAPIService im Test verfügbar ist
            ],
        }).compileComponents();

        router = TestBed.inject(Router);
        location = TestBed.inject(Location);
    });

    it('should navigate to "" and load HomepageComponent', async () => {	    
        await router.navigateByUrl('/');
        fixture = TestBed.createComponent(HomepageComponent);
        fixture.detectChanges();
        
        const homepage = fixture.nativeElement.querySelector('#homeTemplate');
        expect(homepage).toBeTruthy();
    });

    it('should navigate to "homepage" and load HomepageComponent', async () => {	    
        await router.navigateByUrl('/homepage');
        fixture = TestBed.createComponent(HomepageComponent);
        fixture.detectChanges();
        
        const homepage = fixture.nativeElement.querySelector('#homeTemplate');
        expect(homepage).toBeTruthy();
    });

    it('should navigate to "**" and load HomepageComponent', async () => {	    
        await router.navigateByUrl('/**');
        fixture = TestBed.createComponent(HomepageComponent);
        fixture.detectChanges();
        
        const homepage = fixture.nativeElement.querySelector('#homeTemplate');
        expect(homepage).toBeTruthy();
    });

    it('should navigate to "create" and load BookFormComponent', async () => {	    
        await router.navigateByUrl('/create');
        fixture = TestBed.createComponent(BookFormComponent);
        fixture.detectChanges();
        
        const formElement = fixture.nativeElement.querySelector('#bookFormTemplate');
        expect(formElement).toBeTruthy();
    });

    it('should navigate to "archive" and load ArchiveComponent', async () => {	    
        await router.navigateByUrl('/archive');
        fixture = TestBed.createComponent(ArchiveComponent);
        fixture.detectChanges();
        
        const formElement = fixture.nativeElement.querySelector('#archiveTemplate');
        expect(formElement).toBeTruthy();
    });

    it('should navigate to "books" and load TableComponent', async () => {	    
        await router.navigateByUrl('/books');
        fixture = TestBed.createComponent(TableComponent);
        fixture.detectChanges();
        
        const formElement = fixture.nativeElement.querySelector('#tableTemplate');
        expect(formElement).toBeTruthy();
    });

    it('should navigate to "authors" and load AuthorsComponent', async () => {	    
        await router.navigateByUrl('/authors');
        fixture = TestBed.createComponent(AuthorsComponent);
        fixture.detectChanges();
        
        const formElement = fixture.nativeElement.querySelector('#authorsTemplate');
        expect(formElement).toBeTruthy();
    });

    it('should navigate to "comments" and load CommentsComponent', async () => {	    
        await router.navigateByUrl('/comments');
        fixture = TestBed.createComponent(CommentsComponent);
        fixture.detectChanges();
        
        const formElement = fixture.nativeElement.querySelector('#commentsTemplate');
        expect(formElement).toBeTruthy();
    });

    it('should navigate to "impressum" and load ImpressumComponent', async () => {	    
        await router.navigateByUrl('/impressum');
        fixture = TestBed.createComponent(ImpressumComponent);
        fixture.detectChanges();
        
        const formElement = fixture.nativeElement.querySelector('#impressumTemplate');
        expect(formElement).toBeTruthy();
    });

    it('should navigate to "/edit/1" and load BookFormComponent', async () => {	    
        await router.navigateByUrl('/edit/1');
        fixture = TestBed.createComponent(BookFormComponent);
        fixture.detectChanges();
        
        const formElement = fixture.nativeElement.querySelector('#bookFormTemplate');
        expect(formElement).toBeTruthy();
    });

    it('should navigate to "/view/1" and load BookFormComponent', async () => {	    
        await router.navigateByUrl('/view/1');
        fixture = TestBed.createComponent(BookFormComponent);
        fixture.detectChanges();
        
        const formElement = fixture.nativeElement.querySelector('#bookFormTemplate');
        expect(formElement).toBeTruthy();
    });

    it('should navigate to "/delete/1" and load BookFormComponent', async () => {	    
        await router.navigateByUrl('/delete/1');
        fixture = TestBed.createComponent(BookFormComponent);
        fixture.detectChanges();
        
        const formElement = fixture.nativeElement.querySelector('#bookFormTemplate');
        expect(formElement).toBeTruthy();
    });
});