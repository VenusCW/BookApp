import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { ExistingLibraryComponent } from './existing-library/existing-library.component';
import { AddLibraryComponent } from './add-library/add-library.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LandingComponent } from './landing/landing.component';
import { LibraryFormComponent } from './library-form/library-form.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'add-library', component: AddLibraryComponent },
  { path: 'existing-library', component: ExistingLibraryComponent },
  { path: 'search', component: SearchComponent },
  { path: '**', component: NotFoundComponent },
  { path: 'library-form', component: LibraryFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
