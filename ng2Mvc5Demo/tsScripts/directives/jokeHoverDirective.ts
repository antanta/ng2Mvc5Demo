/// <reference path ="../../scripts/typings/jquery/jquery.d.ts"/> 

import { ElementRef } from '@angular/core';
import { Renderer } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
    selector: "[ccJokeHover]"//namespace always
})
export class JokeHoverDirective {
    constructor(private el: ElementRef,
        private renderer: Renderer) {
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
}