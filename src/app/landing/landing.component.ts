import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Routes } from '@angular/router';
import { QuotesService } from '../quotes.service';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  providers: [QuotesService],
})
export class LandingComponent implements OnInit {
  quotes: any;
  // queryField;

  getQuotes(): void {}
  constructor(public QuotesService: QuotesService) {}

  ngOnInit(): void {
    this.getQuotes();
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
