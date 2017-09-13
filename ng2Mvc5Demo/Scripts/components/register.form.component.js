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
require("rxjs/Rx");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var primeng_1 = require("primeng/primeng");
var RegisterFormComponent = /** @class */ (function () {
    function RegisterFormComponent() {
        this.blockedDocument = false;
        this.counter = 0;
        this.langs = [
            'English',
            'French',
            'German',
        ];
    }
    RegisterFormComponent.prototype.blockDocument = function () {
        var _this = this;
        this.blockedDocument = true;
        setTimeout(function () {
            _this.blockedDocument = false;
        }, 3000);
    };
    RegisterFormComponent.prototype.ngOnInit = function () {
        this.myform = new forms_1.FormGroup({
            name: new forms_1.FormGroup({
                firstName: new forms_1.FormControl(),
                lastName: new forms_1.FormControl(),
            }),
            email: new forms_1.FormControl(),
            password: new forms_1.FormControl(),
            language: new forms_1.FormControl("")
        });
        this.myform.valueChanges.subscribe(function (x) {
            console.log(x);
        });
        this.searchField = new forms_1.FormControl();
        this.searchField.valueChanges
            .debounceTime(400)
            .distinctUntilChanged()
            .subscribe(function (e) {
            console.log(e);
        });
    };
    RegisterFormComponent.prototype.onSearchChange = function (e) {
    };
    RegisterFormComponent.prototype.incrementCounter = function () {
        this.counter++;
    };
    RegisterFormComponent.prototype.onSubmit = function () {
        var that = this;
        if (this.myform.valid) {
            that.blockedDocument = true;
            $.ajax({
                url: 'api/RegisterForm/ProcessRegister',
                type: 'POST',
                dataType: 'json',
                data: this.myform.value,
                complete: function () {
                    that.blockedDocument = false;
                }
            });
            console.log("Form Submitted!");
        }
    };
    RegisterFormComponent = __decorate([
        core_1.Component({
            selector: 'register-form',
            styleUrls: [
                '../Styles/components/register.form.component.css'
            ],
            templateUrl: '../Templates/components/register.form.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], RegisterFormComponent);
    return RegisterFormComponent;
}());
exports.RegisterFormComponent = RegisterFormComponent;
var BlockUIDemo = /** @class */ (function () {
    function BlockUIDemo() {
        this.blockedPanel = false;
        this.blockedDocument = false;
    }
    BlockUIDemo.prototype.blockDocument = function () {
        var _this = this;
        primeng_1.BlockUIModule.apply;
        this.blockedDocument = true;
        setTimeout(function () {
            _this.blockedDocument = false;
        }, 3000);
    };
    return BlockUIDemo;
}());
exports.BlockUIDemo = BlockUIDemo;
//# sourceMappingURL=register.form.component.js.map