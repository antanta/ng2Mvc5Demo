/* Boot file. Meeting point for the application */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';

import { AppComponent } from './app.component';

import { HttpModule, JsonpModule, Jsonp, Response } from '@angular/http'

import { SearchService } from './services/SearchService'
import { HomeComponent } from './components/home.component'
import { SearchComponent } from './components/search.component'
import { AppHeaderComponent } from './components/app.header.component'

import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, /* Exct match the empty string */
    { path: 'find', redirectTo: 'search' },
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: 'lazy', loadChildren: 'Scripts/components/lazy/lazy.module#LazyModule' },
    { path: '**', component: HomeComponent } /* Catch all routes not in the rest */
];

@NgModule({
    declarations: [
        AppComponent,
        AppHeaderComponent,
        HomeComponent,
        SearchComponent
    ],
  imports: [
      BrowserModule,
      HttpModule,
      JsonpModule,

      RouterModule.forRoot(routes)
  ],
  providers: [
      SearchService
  ],
  bootstrap: [
      AppComponent
  ]
})
export class AppModule {
}
