import { Component, OnInit } from '@angular/core';

interface Books {
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

  constructor() { }

 // getLibraryService(): void {
 //   this.LibraryService.getLibrary(
 //     this.readername,
      
 //   );
 // }

  ngOnInit(): void {
  }

}

