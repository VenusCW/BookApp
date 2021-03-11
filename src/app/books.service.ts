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
  getBooks(search: string, authors: string, subject: string) {
    console.log(search);
    {
      const requestUrl =
        this.url +
        '?q=' +
        search +
        +'&orderBy=newest' +
        '&maxResults=30' +
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
  getNewBooks() {
      return this.http.get(
        `https://www.googleapis.com/books/v1/volumes?q='best seller' + &maxResults=39&key=${this.key}`
      );
    }


  // getBooks(search: string) {
  //   const requestUrl = this.url + '?q=' + search + '&key=' + this.key;
  //   this.http.get(requestUrl).subscribe(
  //     (response: any) => {
  //       console.log(response);
  //       const books = response.data.children;

  //       for (let book of books) {
  //         const bookList: Response = {
  //           title: book.data.title,
  //           authors: book.data.authors,
  //           thumbnail: book.data.thumbnail,
  //           categories: book.data.categories,
  //           publishedDate: book.data.publishedDate,
  //           language: book.data.language
  //         };
  //         this.bookList.push(bookList);
  //       }
  //       console.log(this.bookList);
  //     }
  // (error) => console.log(error)
  //   );
  // }

  // this.http.get(requestUrl).subscribe(
  //   (response: Response) => {
  //     console.log(response.results);
  //     //this.movies = response.results;
  //     const newBook = response.results;

  // getBooks(queryField: string) {
  //   return this.http.get(
  //     `https://www.googleapis.com/books/v1/volumes?q=${queryField}&maxResults=39&key=${this.key}`
  //   );
  // }
}
