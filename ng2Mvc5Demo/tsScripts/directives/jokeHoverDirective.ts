/// <reference path ="../../scripts/typings/jquery/jquery.d.ts"/> 

import { ElementRef } from '@angular/core';
import { Renderer, Input, Output, OnInit } from '@angular/core';
import { Directive } from '@angular/core';

import { HostListener } from '@angular/core'
import { HostBinding } from '@angular/core'

@Directive({
    selector: "[ccJokeHover]"//namespace always
})
export class JokeHoverDirective implements OnInit {
    private fadeDuration: number;
    private dirEl: JQuery;

    @Input() config: HoverDirectiveConfig;//we can add allias here

    @HostBinding('class.div-with-bold') isBold: boolean = false; 

    constructor(private el: ElementRef,
        private renderer: Renderer) {
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

    ngOnInit(): void {
        if (this.config && this.config.fadeDuration) {
            this.fadeDuration = this.config.fadeDuration;
        }

        //Animate
        this.dirEl.fadeIn(this.fadeDuration);
    }

    @HostListener('mouseover') onMouseOver() {
        this.isBold = true;
    }
    @HostListener('mouseout') onMouseOut() {
        this.isBold = false;
    }
}

class HoverDirectiveConfig {
    fadeDuration: number;
}