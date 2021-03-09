import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { SearchComponent } from './search/search.component';
import { ExistingLibraryComponent } from './existing-library/existing-library.component';
import { AddLibraryComponent } from './add-library/add-library.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {LandingComponent} from './landing/landing.component';

const routes: Routes = [

  {path: "", component: SearchComponent},
  {path: "add-library", component: AddLibraryComponent},
  {path: "existing-library", component: ExistingLibraryComponent},
  {path: "landing", component: LandingComponent},
  { path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
