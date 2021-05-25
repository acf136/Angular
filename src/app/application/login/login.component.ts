import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutorizationService } from '../../shared/service/autorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private isValidPassword = new RegExp( '^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\\d)(?=.*[!#$%&?"])(?!.*\\s).*$' ) ;
/**
// ^.*              : Start
// (?=.{8,})        : should Length 8 or more characters
// (?=.*[a-zA-Z])   : should contain Letters
// (?=.*\d)         : should contain Digits
// (?=.*[!#$%&?"])  : should contain Special characters in this set
// (?!.*\s)         : should not contain any blank space
// .*$              : End
*/
  public loginForm : FormGroup;

  constructor(private service : AutorizationService, private router : Router, private builder: FormBuilder ) {
  }

  private buildForm() {
    this.loginForm = this.builder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8),  Validators.maxLength(20),
                      Validators.pattern(this.isValidPassword) ]
                ]
    });
  }

  private checkLogin(uname: string, pwd : string) : boolean {
    return  this.service.checkUserPassword(uname, pwd);
  }

  ngOnInit(): void {
    this.buildForm() ;
  }

  get username(): AbstractControl {
    return this.loginForm.controls.username;
  }
  get password(): AbstractControl {
    return this.loginForm.controls.password;
  }

  doLogin() {
    console.log('User:' + this.username.value );
    console.log('Password:' + this.password.value);
    // if (this.loginForm.valid){
    if ( this.checkLogin( this.username.value , this.password.value ) ) {
      this.goToHome();
    } else {
       alert('Login incorrect') ;
    }
  }

  goToHome () {
    this.router.navigate(['/home']);
  }

  ValidFieldValue( argFieldValue: string) : boolean {
    switch (argFieldValue)
    {
      case 'password' :
        return !this.password.hasError('pattern');
      default :
        return true
    }
  }

}

