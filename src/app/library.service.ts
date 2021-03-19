import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BooksService } from './books.service';

interface Books {
  librarycard: number;
  name: string;
  status: string;
  title: string;
  author: string;
  category: string;
}

@Injectable({
  providedIn: 'root',
})
export class LibraryService {
  url = 'http://localhost:3000/routes';
  // url = "/routes"
  public readername: string = '';
  public books: any[] = [];
  public title: string = '';
  constructor(private http: HttpClient, public BooksService: BooksService) {}

  getLibrary() {
    this.http
      .get(this.url + '?reader=' + this.readername)
      .subscribe((response: any) => {
        this.books = response;
        console.log(response);
      });
  }

  addBook(newBook: any) {
    console.log(newBook);
    this.http.post(this.url, newBook).subscribe((response: any) => {
      console.log(response);
    });
  }

  addFromSearch(newSearchBook: any) {
    console.log(newSearchBook);
    this.http.post(this.url, newSearchBook).subscribe((response: any) => {
      console.log(response);
    });
  }
}
