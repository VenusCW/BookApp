import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Response {
  title: string;
  authors: string;
  thumbnail: string;
  categories: string;
  publishedDate: number;
  language: string;
}

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  key = 'AIzaSyDg4C1YgpmGasG5b6RaoBMmMX-WWWxuzpM';
  url = 'https://www.googleapis.com/books/v1/volumes';
  books: any[] = [];
  bookList: Response[] = [];
  public title: string = '';
  public author: string = '';
  public category: string = '';

  constructor(private http: HttpClient) {}

  //search by string only, add maxReturn

  // authors: string, subject: string ; + '&maxResults=30' --> took these out to test returned results
  getBooks(search: string) {
    console.log(search);
    {
      const requestUrl = this.url + '?q=' + search + '&key=' + this.key;

      this.http.get(requestUrl).subscribe(
        (response: any) => {
          this.books = response.items;
        },
        (error) => console.log(error)
      );
    }
  }
  getAdvBooks(search: string, author: string, subject: string) {
    console.log(search);
    {
      const requestUrl =
        this.url +
        '?q=' +
        search +
        '+inauthor:' +
        author +
        '+subject:' +
        subject +
        '&key=' +
        this.key;

      this.http.get(requestUrl).subscribe(
        (response: any) => {
          this.books = response.items;
        },
        (error) => console.log(error)
      );
    }
  }
}
