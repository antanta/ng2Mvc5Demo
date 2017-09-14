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
var app_component_1 = require("./app.component");
var http_1 = require("@angular/http");
var SearchService_1 = require("./services/SearchService");
var home_component_1 = require("./components/home.component");
var search_component_1 = require("./components/search.component");
var app_header_component_1 = require("./components/app.header.component");
var router_1 = require("@angular/router");
var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'find', redirectTo: 'search' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'search', component: search_component_1.SearchComponent },
    { path: 'lazy', loadChildren: 'Scripts/components/lazy/lazy.module#LazyModule' },
    { path: '**', component: home_component_1.HomeComponent } /* Catch all routes not in the rest */
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                app_header_component_1.AppHeaderComponent,
                home_component_1.HomeComponent,
                search_component_1.SearchComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                router_1.RouterModule.forRoot(routes)
            ],
            providers: [
                SearchService_1.SearchService
            ],
            bootstrap: [
                app_component_1.AppComponent
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map