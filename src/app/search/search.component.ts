import { Component, Input, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [BooksService],
})
export class SearchComponent implements OnInit {
  books: any;
  // queryField: FormControl = new FormControl();
  public generalSearch: string = '';
  public author: string = '';
  public subjectSearch: string = '';

  getBooksList(): void {
    this.BooksService.getBooks(
      this.generalSearch,
      // this.author,
      // this.subjectSearch
    );
  }


  constructor(public BooksService: BooksService) {}

  ngOnInit() {
    // this.BooksService.getBooks();
  }
  goToLink(url: string) {
    window.open(url, "_blank");
  }
  addToLibrary(): void {

  }
}
