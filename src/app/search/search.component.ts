import { Component, Input, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { FormControl } from '@angular/forms';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  // providers: [BooksService],
})
export class SearchComponent implements OnInit {
  books: any;
  // queryField: FormControl = new FormControl();
  public generalSearch: string = '';
  public author: string = '';
  public subjectSearch: string = '';
  public title: string = '';


  getBooksList(): void {
    this.BooksService.getBooks(
      this.generalSearch
      // this.author,
      // this.subjectSearch
    );
  }

  constructor(
    public BooksService: BooksService,
    public library: LibraryService
  ) {}

  ngOnInit() {
    // this.BooksService.getBooks();
  }
  goToLink(url: string) {
    window.open(url, '_blank');
  }

// setBookDetails() {
//     this.library.title = this.BooksService.volumeInfo.title;
    // this.author = this.author;
    // this.category = this.category;
  // }
  addFromSearch() {
    const newSearchBook = {
      readername: this.library.readername,
      status: 'Wishlist',
      title: this.title,
      // author: this.BooksService.author,
      // category: this.BooksService.category,
    };
    console.log(this.title); 
    this.library.addFromSearch(newSearchBook);
  }
}
