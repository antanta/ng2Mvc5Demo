import { Component, NgModule, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { SimpleChanges, OnChanges, OnInit } from '@angular/core';
import { ViewChildren, ContentChildren, QueryList } from '@angular/core';

class Joke {
    public question: string;
    public answer: string;
    public hide: boolean;

    constructor(question: string, answer: string) {
        this.question = question;
        this.answer = answer;
        this.hide = true;
    }

    toggle() {
        this.hide = !this.hide;
    }
}

@Component({
    selector: 'joke-form',
    templateUrl: '../Templates/components/joke.form.component.html',
    styleUrls: [
        '../Styles/components/joke.form.component.css'
    ]
})
export class JokeFormComponent implements OnChanges {
    @Output() jokeCreated = new EventEmitter<Joke>();/* jokeCreated is event here */

    createJoke(question: string, answer: string, senderQ: any, senderA: any): void {
        debugger;
        this.jokeCreated.emit(new Joke(question, answer));
    }

    keyUpTest(event): void {
        console.log(event.keyCode);
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log(`ngOnChanges - data is ${changes}`);
    }
}

@Component({
    selector: 'joke',
    templateUrl: '../Templates/components/joke.component.html'
})
export class JokeComponent implements OnInit, OnChanges {
    @Input('jokemaina') data: Joke; /* from the form prorp */
    ngOnInit(): void {
        console.log(`joke init`);
    }
    ngOnChanges(changes: SimpleChanges) {
        console.log(`joke onChanges`);
    }
}

@Component({
    selector: 'joke-list',
    template: `
        <joke-form (jokeCreated)="addJoke($event)"></joke-form>
        <joke *ngFor="let j of jokes" [jokemaina]="j">
          <span class="questionClassSelector">{{ j.question }}?</span>
          <h1 class="answerClassSelector">{{ j.answer }}</h1>
        </joke>

        Content template joke:
        <ng-content></ng-content>
        `
})
export class JokeListComponent {
    jokes: Joke[];

    @ViewChildren(JokeComponent) jokeViewChildren: QueryList<JokeComponent>;
    @ContentChildren(JokeComponent) jokeContentChildren: JokeComponent;

    constructor() {
        this.jokes = [
            new Joke("What did the cheese say when it looked in the mirror", "Hello-me (Halloumi)"),
            new Joke("What kind of cheese do you use to disguise a small horse", "Mask-a-pony (Mascarpone)"),
            new Joke("A kid threw a lump of cheddar at me", "I thought ‘That’s not very mature’"),
        ];
    }

    addJoke(joke) {
        debugger; /* handles the event emiited fro the event emitter */
        this.jokes.unshift(joke);
    }
}

@Component({
    selector: 'my-app',
    templateUrl: '../Templates/app.component.html',
    styleUrls: [
        '../Styles/app.component.css'
    ]
})
export class AppComponent {
    rootJoke: Joke = new Joke("A kid threw a lump of cheddar at me", "I thought 'That's not very mature'");
}