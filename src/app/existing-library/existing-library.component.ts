import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibraryService } from '../library.service';


interface Books {
  librarycard: number;
  name: string;
  status: string;
  title: string;
  author: string;
  category: string;
}

@Component({
  selector: 'app-existing-library',
  templateUrl: './existing-library.component.html',
  styleUrls: ['./existing-library.component.css'],
})
export class ExistingLibraryComponent implements OnInit {
  library: any = [];
  constructor(public LibraryService: LibraryService, public router: Router) {}

  // getLibraryService(): void {
  //   this.LibraryService.getLibrary(
  //     this.readername,

  //   );
  // }

  ngOnInit(){
    this.library.getLibrary(); 
  }
}
