/* Boot file. Meeting point for the application */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JokeComponent, JokeListComponent, JokeFormComponent  } from './app.component';

/* Custom directives */
import { JokeHoverDirective } from './directives/jokeHoverDirective';

@NgModule({
    declarations: [AppComponent,
        JokeComponent,
        JokeListComponent,
        JokeFormComponent,
        JokeHoverDirective
    ],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
