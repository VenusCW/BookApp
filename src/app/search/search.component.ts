import { Component, Input, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { FormControl } from '@angular/forms';
import { LibraryService } from '../library.service';
import { Router } from '@angular/router';

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
    public library: LibraryService,
    public router: Router
  ) {}

  ngOnInit() {
    // this.BooksService.getBooks();
  }
  goToLink(url: string) {
    window.open(url, '_blank');
  }

  setBookDetails() {
    this.BooksService.title = this.title;
    console.log(this.title);
    // this.author = this.author;
    // this.category = this.category;
  }
  addFromSearch(book: any) {
    console.log(book);
    const newSearchBook = {
      readername: this.library.readername,
      status: 'Wishlist',
      title: book.volumeInfo.title,
      author: book.volumeInfo.authors[0],
      category: book.volumeInfo.categories[0],
    };
    console.log(newSearchBook.category);
    this.library.addFromSearch(newSearchBook);
  }
}
