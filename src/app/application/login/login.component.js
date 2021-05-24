var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
let LoginComponent = class LoginComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.buildForm();
    }
    get username() {
        return this.loginForm.controls.username;
    }
    get password() {
        return this.loginForm.controls.password;
    }
    buildForm() {
        this.loginForm = new FormGroup({
            'username': new FormControl(null, [Validators.required]),
            'password': new FormControl(null, [Validators.required, Validators.maxLength(10), Validators.minLength(8)])
        });
    }
    doLogin() {
        console.log('User:' + this.username.value);
        console.log('Password:' + this.password.value);
        if (this.loginForm.valid) {
            this.router.navigate(['/home']);
        }
    }
    goToHome() {
        this.router.navigate(['/home']);
    }
};
LoginComponent = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.scss']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map