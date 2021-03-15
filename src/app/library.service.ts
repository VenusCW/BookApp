import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Books {
  name: string;
  status: string;
  title: string;
  author: string;
  category: string;
}

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  public readername: string ='';
  constructor() { }
}




