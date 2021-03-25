import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable()
export class InterceptorService implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.responseType == 'json') {
      req = req.clone({ responseType: 'text' });

      return next.handle(req).pipe(
        map((response) => {
          if (response instanceof HttpResponse) {
            response = response.clone<any>({ body: JSON.parse(response.body) });
          }

          return response;
        })
      );
    }

    return next.handle(req);
  }
}
