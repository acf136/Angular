import { Injectable } from '@angular/core';
import { IUser } from '../interfaces';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // VERSION Using HttpClient returnig Observable<IUser[]>

  private usersUrl = 'api/usersArray/';  // URL to web api

  constructor( private http: HttpClient ) {}

  /** GET users from the server
   *
   */
  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.usersUrl).pipe(
      retry(2),
      catchError( (error: HttpErrorResponse) => {
          console.error(error);
          return throwError(error);
      } )
    );
  }
  // CUD: operations
  createUser(ps_name: string): Observable<IUser> {
    const user = { name: ps_name , secondName: '', email: '', impagado: false};
    return this.http.post<IUser>(this.usersUrl, user);
  }
  updateUser(p_id: number, p_user: IUser): Observable<any> {
    return this.http.put(this.usersUrl + p_id, p_user);
  }
  deleteUser(p_id: number): Observable<any> {
    return this.http.delete(this.usersUrl + p_id);
  }

}
