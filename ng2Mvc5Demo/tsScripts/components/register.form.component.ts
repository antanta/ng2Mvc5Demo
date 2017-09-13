import 'rxjs/add/operator/toPromise';

import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BlockUIModule, BlockableUI } from 'primeng/primeng'

import { ButtonModule, PanelModule, TabViewModule, CodeHighlighterModule } from 'primeng/primeng';

import { Http } from '@angular/http';

@Component({
    selector: 'register-form',
    styleUrls: [
        '../Styles/components/register.form.component.css'
    ],
    templateUrl: '../Templates/components/register.form.component.html'
})
export class RegisterFormComponent {
    blockedDocument: boolean = false;

    searchField: FormControl;
    public langs: Object[];
    public myform: FormGroup;

    counter: number = 0;

    constructor(private http: Http) {
        this.langs = [];
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

        this.getLanguages();
    }

    onSearchChange(e): void {

    }

    incrementCounter(): void {
        this.counter++;
    }

    onSubmit() {
        var that = this;
        if (this.myform.valid) {
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

    getLanguages(): void {
        var that = this;
        this.http.get('api/RegisterForm/ListLanguages')
            .toPromise()
            .then(function (res) {
                that.langs = res.json();

                //var arr = $.map(res.json(), function (el) {
                //    return el.Description;
                //});
            }).catch(function (err) {
                console.error('Error occured');
            });
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