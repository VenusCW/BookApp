import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Response {
  author: string;
  content: string;
}

@Injectable({
  providedIn: 'root',
})
export class QuotesService {
  url = 'https://api.quotable.io/random'
  quotes: any [] = [];
//   url =
//     'https://quotes-by-quovoo1.p.rapidapi.com/quotes/random?endpoint=apiendpoint_randomQuote';
//   apiKey = 'a3d1706666mshc943102fd80ee9fp1c372fjsnce84b77ed0b2';
//   quotes: any[] = [];
//   // randomQuotes: Response[] = [];
  constructor(private http: HttpClient) {}

  getQuotes() {
    const requestURL = this.url;
    this.http.get(requestURL).subscribe(
      (response:any) => {
        this.quotes = response.content;
      }
    )
  }
//   getQuotes() {
//     const requestURL = this.getUrlWithApiKey() + '?q=';

//     this.http.get(requestURL).subscribe(
//       (response: any) => {
//         console.log(response);
//         this.quotes = response.item;

//         //  const options = response.results;
//       },
//       (error) => {
//         console.error(error);
//       }
//     );
//   }
//   getUrlWithApiKey() {
//     return `${this.url}+?rapidapi-key=${this.apiKey}`;
//   }
// }

//   const randomQuotes = require('request');

//   const options = {

//       method: 'GET',
//       url: 'https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote',
//       qs: {token: 'ipworld.info'},
//       headers: {
//         'x-rapidapi-key': '3e4bb66922mshd5db928295295c3p1def1bjsncfaf9e1565bc',
//         'x-rapidapi-host': 'quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com',
//         useQueryString: true
//       }
//     };

//     request(options, function (error, response, body) {
//         if (error) throw new Error(error);

//         console.log(body);
//     });
// }
// }

// const requestURL = require('request');

// getRandomQuotes(){
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

//   this.requestURL(options, function () {
//       if (error) throw new Error(error);

//       console.log(body);
//   });
}
