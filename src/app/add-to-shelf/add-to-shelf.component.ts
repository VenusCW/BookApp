import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { Router } from '@angular/router';

interface AddBook {
  title: string;
  authors: string;
}

@Component({
  selector: 'app-add-to-shelf',
  templateUrl: './add-to-shelf.component.html',
  styleUrls: ['./add-to-shelf.component.css']
})
export class AddToShelfComponent implements OnInit {
  // addBookToShelf = function(books: AddBook): void {
  //   this.BooksService.books.push({
  //     title: books.title,
  //     authors: books.authors
  //   })
  //   console.log(this.BooksService.books)
  // }
  constructor(public BooksService: BooksService, public router: Router) { }

  ngOnInit(): void {
  }

}
