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
var core_4 = require("@angular/core");
var core_5 = require("@angular/core");
var JokeHoverDirective = /** @class */ (function () {
    function JokeHoverDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.isBold = false;
        this.fadeDuration = 6000;
        this.dirEl = $(el.nativeElement);
        //console.log(that.fadeDuration);
        //setTimeout(function () {
        //    //console.log(that.fadeDuration);
        //    $(el.nativeElement).fadeIn(that.fadeDuration);
        //}, 100);
        // Value capturing
        //(function (c, d) {
        //    setTimeout(function () {
        //        debugger;
        //        $(c).fadeIn(d);
        //    });
        //})(el.nativeElement, this.fadeDuration);
        //For all devices
        //renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'aliceblue');
    }
    JokeHoverDirective.prototype.ngOnInit = function () {
        if (this.config && this.config.fadeDuration) {
            this.fadeDuration = this.config.fadeDuration;
        }
        //Animate
        this.dirEl.fadeIn(this.fadeDuration);
    };
    JokeHoverDirective.prototype.onMouseOver = function () {
        this.isBold = true;
    };
    JokeHoverDirective.prototype.onMouseOut = function () {
        this.isBold = false;
    };
    __decorate([
        core_2.Input(),
        __metadata("design:type", HoverDirectiveConfig)
    ], JokeHoverDirective.prototype, "config", void 0);
    __decorate([
        core_5.HostBinding('class.div-with-bold'),
        __metadata("design:type", Boolean)
    ], JokeHoverDirective.prototype, "isBold", void 0);
    __decorate([
        core_4.HostListener('mouseover'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], JokeHoverDirective.prototype, "onMouseOver", null);
    __decorate([
        core_4.HostListener('mouseout'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], JokeHoverDirective.prototype, "onMouseOut", null);
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
var HoverDirectiveConfig = /** @class */ (function () {
    function HoverDirectiveConfig() {
    }
    return HoverDirectiveConfig;
}());
//# sourceMappingURL=jokeHoverDirective.js.map