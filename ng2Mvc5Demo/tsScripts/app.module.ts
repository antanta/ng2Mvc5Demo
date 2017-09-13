/* Boot file. Meeting point for the application */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { JokeComponent, JokeListComponent, JokeFormComponent  } from './app.component';

import { RegisterFormComponent } from './components/register.form.component';
import { ExternalCommunicationComponent } from './components/external.communication.component';


/* Custom directives */
import { JokeHoverDirective } from './directives/jokeHoverDirective';

/* Forms */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* PrimeNG */
import { BlockUIModule, BlockableUI } from 'primeng/primeng';
import { ButtonModule, PanelModule, TabViewModule, CodeHighlighterModule } from 'primeng/primeng';

/* Reactive */
import 'rxjs/Rx';

/* HTTP communication */
import { HttpModule } from '@angular/http';

@NgModule({
    declarations: [
        AppComponent,
        JokeComponent,
        JokeListComponent,
        JokeFormComponent,
        RegisterFormComponent,
        ExternalCommunicationComponent,

        JokeHoverDirective
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,

        //primeng
        CommonModule,
        BlockUIModule,

        ButtonModule,
        PanelModule,
        TabViewModule,
        CodeHighlighterModule,

        HttpModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
