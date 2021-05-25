import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private routes : Router){ }

  canActivate(  next: ActivatedRouteSnapshot, state: RouterStateSnapshot):  boolean {
    if ( localStorage.getItem('username')!= null) {
      return true;
    } else {
      this.routes.navigate(['/login']);
      return false;
    }
  }
}
