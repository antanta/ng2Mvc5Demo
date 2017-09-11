"use strict";
/// <reference path ="../../scripts/typings/jquery/jquery.d.ts"/> 
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
var core_3 = require("@angular/core");
var JokeHoverDirective = /** @class */ (function () {
    function JokeHoverDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        setTimeout(function () {
            $(el.nativeElement).fadeOut(1000);
        });
        // Value capturing
        /*
        (function (c) {
            setTimeout(function () {
                $(c).fadeOut(1000);
            }, 100);
        })(el.nativeElement);
        */
        //For all devices
        //renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'aliceblue');
    }
    JokeHoverDirective = __decorate([
        core_3.Directive({
            selector: "[ccJokeHover]" //namespace always
        }),
        __metadata("design:paramtypes", [core_1.ElementRef,
            core_2.Renderer])
    ], JokeHoverDirective);
    return JokeHoverDirective;
}());
exports.JokeHoverDirective = JokeHoverDirective;
//# sourceMappingURL=jokeHoverDirective.js.map