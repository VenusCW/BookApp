import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [BooksService],
})
export class SearchComponent implements OnInit {
  constructor(public BooksService: BooksService) {}

  ngOnInit(): void {
    this.BooksService.getBooks();
  }
}
