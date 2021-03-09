import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
=======
import { Routes, RouterModule } from '@angular/router';
>>>>>>> a878b5e61c9918456ed7cce279b97b799657d662

import { SearchComponent } from './search/search.component';
import { ExistingLibraryComponent } from './existing-library/existing-library.component';
import { AddLibraryComponent } from './add-library/add-library.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
<<<<<<< HEAD
  {path: "", component: SearchComponent},
  {path: "add-library", component: AddLibraryComponent},
  {path: "existing-library", component: ExistingLibraryComponent},
=======
  { path: '', component: SearchComponent },
  { path: 'add-library', component: AddLibraryComponent },
  { path: 'existing-library', component: ExistingLibraryComponent },
  { path: '**', component: NotFoundComponent },
>>>>>>> a878b5e61c9918456ed7cce279b97b799657d662
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
