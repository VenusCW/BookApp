import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Response {
  results: string;
}

@Injectable({
  providedIn: 'root',
})
export class QuotesService {
  url =
    'https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote';
  apiKey = '3e4bb66922mshd5db928295295c3p1def1bjsncfaf9e1565bc';
  // public quotes: any[] = [];
  //  randomQuotes: Response[] = [];
  constructor(private http: HttpClient) {}

  getQuotes() {
    const apiUrl= 'https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote'
//     const requestURL = this.getUrlWithApiKey();

//     this.http.get(requestURL).subscribe(
//       (Response) => {
//         console.log(Response);
//         //  const options = response.results;
//       },
//       (error) => {
//         console.error(error);
//       }
//     );
//   }
//   getUrlWithApiKey() {
//     return `${this.url}?api_key=${this.apiKey}&language=en-US`;
//   }
// }
this.getQuotes();
  return this.http.get(`$this.apiUrl}`);
}
}
// const settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote?token=ipworld.info",
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "3e4bb66922mshd5db928295295c3p1def1bjsncfaf9e1565bc",
// 		"x-rapidapi-host": "quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com"
// 	}
// };

// this.ajax(settings).done(function (response) {
// 	console.log(response);
// });
  // const randomQuotes = require('request');

  // const options = {

  //     method: 'GET',
  //     url: 'https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote',
  //     qs: {token: 'ipworld.info'},
  //     headers: {
  //       'x-rapidapi-key': '3e4bb66922mshd5db928295295c3p1def1bjsncfaf9e1565bc',
  //       'x-rapidapi-host': 'quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com',
  //       useQueryString: true
  //     }
  // };


    // this.requestURL(options, function (error, response, body) {
    //     if (error) throw new Error(error);

    //     console.log(body);
    // });

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
