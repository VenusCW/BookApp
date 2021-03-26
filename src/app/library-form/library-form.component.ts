import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LibraryService } from '../library.service';
import {MatFormFieldControl} from '@angular/material/form-field';
import { FormControl, Validators} from '@angular/forms';  

interface Category {
  value: string;
  viewValue: string;
}

interface Status {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-library-form',
  templateUrl: './library-form.component.html',
  styleUrls: ['./library-form.component.css'],
  providers:[{ provide: MatFormFieldControl, useExisting: LibraryFormComponent}]
})

export class LibraryFormComponent implements OnInit {
  public readername: string = '';
  public status: string = '';
  public title: string = '';
  public author: string = '';
  public category: string = '';

  categories: Category[] = [
    {value: 'Fiction', viewValue: 'Fiction'},
    {value: 'Non-Fiction', viewValue: 'Non-Fiction'},
    {value: 'Romance', viewValue: 'Romance'},
    {value: 'Biography', viewValue: 'Biography'},
    {value: 'Auto-Biography', viewValue: 'Auto-Birgraphy'}, 
    {value: 'Mystery', viewValue: 'Mystery'}, 
    {value: 'Horror', viewValue: 'Horror'}
  ];

  bookStatus: Status[] = [
    {value: 'On my shelf', viewValue: 'On my shelf'},
    {value: 'Read', viewValue: 'Read'},
    {value: 'Wishlist', viewValue: 'Wishlist'}
  ];
  constructor(public library: LibraryService, public router: Router) {}

    addBook() {
    const newBook = {
      readername: this.library.readername,
      status: this.status,
      title: this.title,
      author: this.author,
      category: this.category,
    };

    this.library.addBook(newBook);
  }

  ngOnInit(): void {
    // this.library.setreadername();
  }

  setreadername() {
    this.library.readername = this.readername;
    console.log(this.readername);
  }

  bookTitle = new FormControl('', [Validators.required]);

  getErrorMessage() {
    if (this.bookTitle.hasError('required')){
    }
    return 'You must enter a book title';
  // return this.bookTitle.hasError('bookTitle') ? 'Not a valid title' : '';
  }
}
