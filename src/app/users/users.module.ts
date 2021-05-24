import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { ForbiddenValidatorDirective } from '../shared/forbidden-name.directive';

@NgModule({
  declarations: [
    UserComponent,
    ForbiddenValidatorDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class UsersModule { }
