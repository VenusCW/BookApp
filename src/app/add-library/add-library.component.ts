import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { Router } from '@angular/router';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-add-library',
  templateUrl: './add-library.component.html',
  styleUrls: ['./add-library.component.css'],
})
export class AddLibraryComponent implements OnInit {
  public readername: string = '';
  public status: string = '';
  public title: string = '';
  public author: string = '';
  public category: string = '';

  constructor(public BooksService: BooksService, public library: LibraryService, public router: Router) {}

  // addFromSearch() {
  //   const newSearchBook = {
  //     readername: this.library.readername,
  //     status: 'Wishlist',
  //     title: this.BooksService.title,
  //     author: this.BooksService.author,
  //     category: this.BooksService.category,
  //   };
  // }
  ngOnInit(): void {}
}
