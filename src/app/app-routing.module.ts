import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SearchComponent} from './search/search.component';
import {LandingComponent} from './landing/landing.component';

const routes: Routes = [
  {path: 'landing', component: LandingComponent},
  // {path: },
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
