/* Boot file. Meeting point for the application */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JokeComponent, JokeListComponent, JokeFormComponent  } from './app.component';

@NgModule({
    declarations: [AppComponent,
        JokeComponent,
        JokeListComponent,
        JokeFormComponent
    ],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
