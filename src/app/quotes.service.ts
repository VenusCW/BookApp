import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Response{
  results: string;
}

@Injectable({
  providedIn: 'root'
})
export class QuotesService {
   apiKey = 'https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote'
   url = '3e4bb66922mshd5db928295295c3p1def1bjsncfaf9e1565bc';
   public quotes: any[] = [];
  //  randomQuotes: Response[] = [];
 constructor(private http: HttpClient) {}

 getQuotes() {
   const requestURL =
   this.getUrlWithApiKey();

 this.http.get(requestURL).subscribe(
   (Response) =>{
     console.log(Response);
    //  const options = response.results;
},
(error)=>{
  console.error(error);
}
);
}
getUrlWithApiKey(){
  return `${this.url}?api_key=${this.apiKey}&language=en-US`;
}
}

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
