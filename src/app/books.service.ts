import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Response {
  // results: Book[];
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
  // favorites: any[] = [];
  bookList: Response[] = [];

  constructor(private http: HttpClient) {}

  //search by string only, add maxReturn
  // authors: string, subject: string ; + '&maxResults=30' --> took these out to test returned results
  getBooks(search: string) {
    console.log(search);
    {
      const requestUrl =
        this.url + '?q=' + search + +'&orderBy=newest' + '&key=' + this.key;

      this.http.get(requestUrl).subscribe(
        (response: any) => {
          this.books = response.items;
        },
        (error) => console.log(error)
      );
    }
  }
  // getNewBooks() {
  //     return this.http.get(
  //       `https://www.googleapis.com/books/v1/volumes?q='best seller' + &maxResults=39&key=${this.key}`
  //     );
  //   }
}
