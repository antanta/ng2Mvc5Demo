/* Boot file. Meeting point for the application */


import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';

import { AppComponent } from './app.component';

import { HttpModule, JsonpModule, Jsonp, Response } from '@angular/http'

import { SearchService } from './services/SearchService'

@NgModule({
    declarations: [
        AppComponent
    ],
  imports: [
      BrowserModule,
      HttpModule,
      JsonpModule
  ],
  providers: [
      SearchService
  ],
  bootstrap: [
      AppComponent
  ]
})
export class AppModule { }
