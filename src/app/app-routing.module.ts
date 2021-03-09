import { NgModule } from '@angular/core';
<<<<<<< HEAD
=======
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
>>>>>>> 54ca729b013037304e3bdd474872b32441dd8751

import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { SearchComponent } from './search/search.component';
import { ExistingLibraryComponent } from './existing-library/existing-library.component';
import { AddLibraryComponent } from './add-library/add-library.component';
<<<<<<< HEAD
=======

>>>>>>> 54ca729b013037304e3bdd474872b32441dd8751
import { NotFoundComponent } from './not-found/not-found.component';
import {LandingComponent} from './landing/landing.component';

import {LandingComponent} from './landing/landing.component';

const routes: Routes = [

  {path: "", component: SearchComponent},
  {path: "add-library", component: AddLibraryComponent},
  {path: "existing-library", component: ExistingLibraryComponent},
  {path: "landing", component: LandingComponent},
  { path: '**', component: NotFoundComponent },

];

@NgModule({
<<<<<<< HEAD



=======
  
  
  
>>>>>>> 54ca729b013037304e3bdd474872b32441dd8751
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
