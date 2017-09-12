"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var Joke = /** @class */ (function () {
    function Joke(question, answer) {
        this.question = question;
        this.answer = answer;
        this.hide = true;
    }
    Joke.prototype.isFunnyJoke = function () {
        var result = false;
        if (this.question.substr(this.question.length - 2) == 'me') {
            result = true;
        }
        return result;
    };
    Joke.prototype.toggle = function () {
        this.hide = !this.hide;
    };
    return Joke;
}());
var JokeFormComponent = /** @class */ (function () {
    function JokeFormComponent() {
        this.jokeCreated = new core_1.EventEmitter(); /* jokeCreated is event here */
    }
    JokeFormComponent.prototype.createJoke = function (question, answer, senderQ, senderA) {
        this.jokeCreated.emit(new Joke(question, answer));
    };
    JokeFormComponent.prototype.keyUpTest = function (event) {
        //console.log(event.keyCode);
    };
    JokeFormComponent.prototype.ngOnChanges = function (changes) {
        //console.log(`ngOnChanges - data is ${changes}`);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], JokeFormComponent.prototype, "jokeCreated", void 0);
    JokeFormComponent = __decorate([
        core_1.Component({
            selector: 'joke-form',
            templateUrl: '../Templates/components/joke.form.component.html',
            styleUrls: [
                '../Styles/components/joke.form.component.css'
            ]
        })
    ], JokeFormComponent);
    return JokeFormComponent;
}());
exports.JokeFormComponent = JokeFormComponent;
var JokeComponent = /** @class */ (function () {
    function JokeComponent() {
    }
    JokeComponent.prototype.ngOnInit = function () {
        //console.log(`joke init`);
    };
    JokeComponent.prototype.ngOnChanges = function (changes) {
        //console.log(`joke onChanges`);
    };
    JokeComponent.prototype.isFunnyJoke = function (param) {
        return this.data.isFunnyJoke();
    };
    __decorate([
        core_1.Input('jokemaina'),
        __metadata("design:type", Joke)
    ], JokeComponent.prototype, "data", void 0);
    JokeComponent = __decorate([
        core_1.Component({
            selector: 'joke',
            styleUrls: [
                '../Styles/components/joke.component.css'
            ],
            templateUrl: '../Templates/components/joke.component.html'
        })
    ], JokeComponent);
    return JokeComponent;
}());
exports.JokeComponent = JokeComponent;
var JokeListComponent = /** @class */ (function () {
    function JokeListComponent() {
        this.jokes = [
            new Joke("What did the cheese say when it looked in the mirror", "Hello-me (Halloumi)"),
            new Joke("What kind of cheese do you use to disguise a small horse", "Mask-a-pony (Mascarpone)"),
            new Joke("A kid threw a lump of cheddar at me", "I thought �That�s not very mature�"),
        ];
    }
    JokeListComponent.prototype.addJoke = function (joke) {
        /* handles the event emiited fro the event emitter */
        this.jokes.unshift(joke);
    };
    JokeListComponent.prototype.ngAfterContentInit = function () {
        //here we have the contentchildren
    };
    JokeListComponent.prototype.ngAfterViewInit = function () {
        //here we have the viewchildren
    };
    __decorate([
        core_2.ViewChildren(JokeComponent),
        __metadata("design:type", core_2.QueryList)
    ], JokeListComponent.prototype, "jokeViewChildren", void 0);
    __decorate([
        core_2.ContentChildren(JokeComponent),
        __metadata("design:type", JokeComponent)
    ], JokeListComponent.prototype, "jokeContentChildren", void 0);
    JokeListComponent = __decorate([
        core_1.Component({
            selector: 'joke-list',
            template: "\n        <joke-form (jokeCreated)=\"addJoke($event)\"></joke-form>\n        <joke *ngFor=\"let j of jokes\" [jokemaina]=\"j\">\n          <span class=\"questionClassSelector\">{{ j.question }}?</span>\n          <h1 class=\"answerClassSelector\">{{ j.answer }}</h1>\n        </joke>\n\n        Content template joke:\n        <ng-content></ng-content>\n        "
        }),
        __metadata("design:paramtypes", [])
    ], JokeListComponent);
    return JokeListComponent;
}());
exports.JokeListComponent = JokeListComponent;
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.rootJoke = new Joke("A kid threw a lump of cheddar at me", "I thought 'That's not very mature'");
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: '../Templates/app.component.html',
            styleUrls: [
                '../Styles/app.component.css'
            ]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map