import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

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
    apiKey = "AIzaSyDg4C1YgpmGasG5b6RaoBMmMX-WWWxuzpM";
    //appId = "3096e7e1";
    url = "https://www.googleapis.com/books/v1/volumes?q=roots+intitle";
    //public books: Book[];
    //favorites: any[] = [];
    constructor(private http: HttpClient) {}

    getBooks() { return this.http.get(this.url).subscribe( (data) => { console.log(data); }, (error) => console.log(error) ); } }

    // getBooks() {
    //   const url = 'https://www.reddit.com/r/aww/.json';
    //   this.http.get(url).subscribe(
    //     (response: any) => {
    //       console.log(response);
    //       const posts = response.data.children;

    //       for (let post of posts) {
    //         const redditPost: RedditResponse = {
    //           title: post.data.title,
    //           link: 'https://reddit.com' + post.data.permalink,
    //           image: post.data.thumbnail,
    //           thread: post.data.comment,
    //         };
    //         this.awwPost.push(redditPost);
    //       }
    //       console.log(this.awwPost);
    //     }



      // this.http.get(requestUrl).subscribe(
      //   (response: Response) => {
      //     console.log(response.results);
      //     //this.movies = response.results;
      //     const newBook = response.results;

