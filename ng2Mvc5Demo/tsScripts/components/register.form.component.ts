import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { BlockUIModule, BlockableUI } from 'primeng/primeng'

@Component({
    selector: 'register-form',
    styleUrls: [
        '../Styles/components/register.form.component.css'
    ],
    templateUrl: '../Templates/components/register.form.component.html'
})
export class RegisterFormComponent /*implements BlockableUI*/  {
    blockedDocument: boolean = false;

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
    }

    onFormChanged(e): void {

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