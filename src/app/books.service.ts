import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 

interface Response {
  //results: Book[];
  title: string; 
}

@Injectable({
  providedIn: 'root', 
})
export class BooksService {
    apiKey = "AIzaSyDg4C1YgpmGasG5b6RaoBMmMX-WWWxuzpM";
    //appId = "3096e7e1";
    url = "https://www.googleapis.com/apiName/apiVersion/resourcePath?parameters";
    //public books: Book[];
    //favorites: any[] = [];
    constructor(private http: HttpClient) {}

    getBooks() { return this.http.get(this.url).subscribe( (data) => { console.log(data); }, (error) => console.log(error) ); } }
  
      
      // this.http.get(requestUrl).subscribe(
      //   (response: Response) => {
      //     console.log(response.results);
      //     //this.movies = response.results;
      //     const newBook = response.results;

