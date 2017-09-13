"use strict";
/* Boot file. Meeting point for the application */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var animations_1 = require("@angular/platform-browser/animations");
var app_component_1 = require("./app.component");
var app_component_2 = require("./app.component");
var register_form_component_1 = require("./components/register.form.component");
/* Custom directives */
var jokeHoverDirective_1 = require("./directives/jokeHoverDirective");
/* Forms */
var forms_1 = require("@angular/forms");
/* PrimeNG */
var primeng_1 = require("primeng/primeng");
var primeng_2 = require("primeng/primeng");
/* Reactive */
require("rxjs/Rx");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                app_component_2.JokeComponent,
                app_component_2.JokeListComponent,
                app_component_2.JokeFormComponent,
                register_form_component_1.RegisterFormComponent,
                jokeHoverDirective_1.JokeHoverDirective
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                animations_1.BrowserAnimationsModule,
                //primeng
                common_1.CommonModule,
                primeng_1.BlockUIModule,
                primeng_2.ButtonModule,
                primeng_2.PanelModule,
                primeng_2.TabViewModule,
                primeng_2.CodeHighlighterModule
            ],
            providers: [],
            bootstrap: [
                app_component_1.AppComponent
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map