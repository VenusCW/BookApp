import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BooksService } from '../books.service';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  providers: [BooksService],
})
export class LandingComponent implements OnInit {
  constructor(public BooksService: BooksService) {}

  ngOnInit(): void {
    // this.BooksService.getBooks();
  }
}
//   const randomQuotes = require('request');

// const options = {
//     method: 'GET',
//     url: 'https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote',
//     qs: {token: 'ipworld.info'},
//     headers: {
//       'x-rapidapi-key': '3e4bb66922mshd5db928295295c3p1def1bjsncfaf9e1565bc',
//       'x-rapidapi-host': 'quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com',
//       useQueryString: true
//     }
//   };

//   request(options, function (error, response, body) {
//       if (error) throw new Error(error);

//       console.log(body);
//   });
