import 'rxjs/Rx';

import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BlockUIModule, BlockableUI } from 'primeng/primeng'

import { ButtonModule, PanelModule, TabViewModule, CodeHighlighterModule } from 'primeng/primeng';

@Component({
    selector: 'register-form',
    styleUrls: [
        '../Styles/components/register.form.component.css'
    ],
    templateUrl: '../Templates/components/register.form.component.html'
})
export class RegisterFormComponent  {
    blockedDocument: boolean = false;

    searchField: FormControl;
    public langs: string[];
    public myform: FormGroup;

    counter: number = 0;

    constructor() {
        this.langs = [
            'English',
            'French',
            'German',
        ];
    }

    blockDocument() {
        this.blockedDocument = true;
        setTimeout(() => {
            this.blockedDocument = false;
        }, 3000);
    }

    ngOnInit() {
        this.myform = new FormGroup({
            name: new FormGroup({
                firstName: new FormControl(),
                lastName: new FormControl(),
            }),
            email: new FormControl(),
            password: new FormControl(),
            language: new FormControl("")
        });

        this.myform.valueChanges.subscribe(x => {
            console.log(x);
        })

        this.searchField = new FormControl();
        this.searchField.valueChanges
            .debounceTime(400)
            .distinctUntilChanged()
            .subscribe(function (e) {
            console.log(e);
        });

    }

    onSearchChange(e): void {

    }

    incrementCounter(): void {
        this.counter++;
    }

    onSubmit() {
        var that = this;
        if (this.myform.valid) {
            debugger;
            that.blockedDocument = true;
            $.ajax({
                url: 'api/RegisterForm/ProcessRegister',
                type: 'POST',
                dataType: 'json',
                data: this.myform.value,
                complete: function () {
                    that.blockedDocument = false
                }
            });

            console.log("Form Submitted!");
        }
    }
}

export class BlockUIDemo {

    blockedPanel: boolean = false;

    blockedDocument: boolean = false;

    blockDocument() {
        BlockUIModule.apply
        this.blockedDocument = true;
        setTimeout(() => {
            this.blockedDocument = false;
        }, 3000);
    }
}