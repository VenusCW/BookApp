import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Books {
  name: string;
  status: string;
  title: string;
  author: string;
  category: string;
}


@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  url = "http://localhost:3000/routes";
  // url = "/routes"
  public readername: string ='';
  public books:any[] = [];
  constructor(private http: HttpClient) {

  }

  getLibrary() {
    this.http.get(this.url + '?reader=' + this.readername).subscribe((response:any) => {
      console.log (response);
    });
  };

  addBook(newBook: any){
    this.http.post(this.url + '/add-library', newBook).subscribe((response:any) => {
      console.log (response);
    });
  }
 }




