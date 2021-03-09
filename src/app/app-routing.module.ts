import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
=======
import { Routes, RouterModule } from '@angular/router';
>>>>>>> Venus

import { SearchComponent } from './search/search.component';
import { ExistingLibraryComponent } from './existing-library/existing-library.component';
import { AddLibraryComponent } from './add-library/add-library.component';
<<<<<<< HEAD
import {LandingComponent} from './landing/landing.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: "", component: SearchComponent},
  {path: "add-library", component: AddLibraryComponent},
  {path: "existing-library", component: ExistingLibraryComponent},
  {path: "landing", component: LandingComponent},
=======
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
>>>>>>> Venus
  { path: '', component: SearchComponent },
  { path: 'add-library', component: AddLibraryComponent },
  { path: 'existing-library', component: ExistingLibraryComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
