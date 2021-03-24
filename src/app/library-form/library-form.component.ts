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
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  bookStatus: Status[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
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
