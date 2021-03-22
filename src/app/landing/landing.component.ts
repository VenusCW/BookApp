import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { QuotesService } from '../quotes.service';
import { FormControl } from '@angular/forms';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  //  providers: [QuotesService],
})
export class LandingComponent implements OnInit {
  quotes: any[] = [];
  public readername: string = '';

  constructor(
    public QuotesService: QuotesService,
    public library: LibraryService
  ) {}

  ngOnInit(): void {
    this.QuotesService.getQuotes();
  }

  setreadername() {
    this.library.readername = this.readername;
    console.log(this.readername);
    this.library.getLibrary();
  }
}
