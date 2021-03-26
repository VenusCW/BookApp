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
  url = 'https://pocket-library.herokuapp.com/routes/';
  // url = "/routes"

  public readername: string = '';
  public books: Books[] = [];
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

    deleteBook(currentBook: number) {
      this.http.delete(this.url + currentBook, {}).subscribe((response:any) => {
        this.getLibrary();
        console.log(response);
      })
    }

    updateStatus(currentBook: number) {
      console.log(currentBook)
      this.http.put(this.url + currentBook, {}).subscribe((response:any) => {
        this.getLibrary();
        console.log(response);
      })
    }
}
