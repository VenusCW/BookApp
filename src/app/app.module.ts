import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
<<<<<<< HEAD

import { HttpClientModule } from '@angular/common/http';
=======
<<<<<<< HEAD
import {HttpClientModule} from '@angular/common/http';
=======

import { HttpClientModule } from '@angular/common/http';
>>>>>>> a878b5e61c9918456ed7cce279b97b799657d662
>>>>>>> master
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ExistingLibraryComponent } from './existing-library/existing-library.component';
import { AddLibraryComponent } from './add-library/add-library.component';
<<<<<<< HEAD
import { NotFoundComponent } from './not-found/not-found.component';
import { NavigationComponent } from './navigation/navigation.component';
=======
<<<<<<< HEAD
import {LandingComponent} from './landing/landing.component';
=======
<<<<<<< HEAD
>>>>>>> master
import {FormsModule} from '@angular/forms';
=======
import { NotFoundComponent } from './not-found/not-found.component';
import { NavigationComponent } from './navigation/navigation.component';
>>>>>>> a878b5e61c9918456ed7cce279b97b799657d662
>>>>>>> master

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ExistingLibraryComponent,
    AddLibraryComponent,
<<<<<<< HEAD
    NotFoundComponent,
    NavigationComponent
=======
<<<<<<< HEAD
    LandingComponent,
=======
    NotFoundComponent,
    NavigationComponent
>>>>>>> master
>>>>>>> master
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
