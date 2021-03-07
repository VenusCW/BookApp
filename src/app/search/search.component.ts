import { Component, Input, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  // providers: [BooksService],
})
export class SearchComponent implements OnInit {
  @Input() book: any; 
  public titleSearch: string = '';
  public author: string = '';
  public subjectSearch: string = '';

  getBookList(): void {
    this.BooksService.getBooks(this.titleSearch);
  }

  constructor(public BooksService: BooksService) {}

  ngOnInit(): void {}
}
