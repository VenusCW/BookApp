import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-library-form',
  templateUrl: './library-form.component.html',
  styleUrls: ['./library-form.component.css']
})
export class LibraryFormComponent implements OnInit {

  public readername: string = '';
  public status: string= "";
  public title: string= "";
  public author: string= "";
  public category: string= "";

  constructor(public library: LibraryService, public form: FormBuilder, public router: Router) {

  }

  addBook(){
    const newBook ={
    readername: this.library.readername,
    status: this.status,
    title: this.title,
    author: this.author,
    category: this.category
    };

    this.library.addBook(newBook);
  }
  // addFromSearch() {
  //   const newSearchBook = {
  //     readername: this.library.readername,
  //     status: this.status,
  //     title: this.title,
  //     author: this.author,
  //     category: this.category,
  //   };
  // }

  ngOnInit(): void {
      // this.library.setreadername();
  }

  setreadername() {
    this.library.readername = this.readername;
    console.log(this.readername);
}
}
