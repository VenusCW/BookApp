import { Component, Input, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { FormControl } from '@angular/forms';
import { LibraryService } from '../library.service';
import { Router } from '@angular/router';


interface Book {
  librarycard: number;
  name: string;
  status: string;
  title: string;
  author: string;
  category: string;
}

@Component({
  selector: 'app-existing-library',
  templateUrl: './existing-library.component.html',
  styleUrls: ['./existing-library.component.css'],
})
export class ExistingLibraryComponent implements OnInit {
  
  public books : Book[] = [];
  public readername: string = '';

  constructor(
    public library: LibraryService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.library.getLibrary();
  }

}

