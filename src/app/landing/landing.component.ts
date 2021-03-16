import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { QuotesService } from '../quotes.service';
import { FormControl } from '@angular/forms';
import { LibraryService} from '../library.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
//  providers: [QuotesService], 
})
export class LandingComponent implements OnInit {
  quotes: any [] = [];
  public readername: string = '';

  constructor(public QuotesService: QuotesService, public library: LibraryService) {}

  ngOnInit(): void {
    this.QuotesService.getQuotes();
  }

  setreadername(){
    
    this.library.readername=this.readername;
    this.library.getLibrary();



  }
  
}
  // goToSearchPage(SearchComponent) {
  //   window.open(url, "_blank");
  // }
//   apiUrl ='https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote';
//   // quotes: any;
//   // queryField;

//   // getQuotes(): void {}
//   constructor(public quotesService:QuotesService) {}

// ngOnInit(): void{}
// }
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
