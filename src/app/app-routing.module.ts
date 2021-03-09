import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';


import { SearchComponent } from './search/search.component';
import { ExistingLibraryComponent } from './existing-library/existing-library.component';
import { AddLibraryComponent } from './add-library/add-library.component';
import {LandingComponent} from './landing/landing.component';


const routes: Routes = [

  { path: '', component: SearchComponent },
  { path: 'add-library', component: AddLibraryComponent },
  { path: 'existing-library', component: ExistingLibraryComponent },
  { path: '**', component: NotFoundComponent },
  {path: "landing", component: LandingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
