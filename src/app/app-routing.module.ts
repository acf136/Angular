import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './application/login/login.component';
import { AuthGuard } from './auth.guard';
import { UserComponent } from './users/user/user.component';

const routes: Routes = [
  { path: '' , redirectTo: '/login', pathMatch : 'full' },
  { path: 'login', component : LoginComponent },
  // { path: 'home', component : UserComponent },
  { path: "home", canActivate : [AuthGuard] , component: UserComponent },
  { path: '**', redirectTo : '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
