/* Boot file. Meeting point for the application */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JokeComponent, JokeListComponent, JokeFormComponent  } from './app.component';

import { RegisterFormComponent } from './components/register.form.component';

/* Custom directives */
import { JokeHoverDirective } from './directives/jokeHoverDirective';

/* Forms */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* PrimeNG */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';//primeng
import { BlockUIModule, BlockableUI } from 'primeng/primeng';


@NgModule({
    declarations: [
        AppComponent,
        JokeComponent,
        JokeListComponent,
        JokeFormComponent,
        RegisterFormComponent,

        JokeHoverDirective
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule//primeng
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
