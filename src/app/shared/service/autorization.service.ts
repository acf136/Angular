import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutorizationService {

  constructor() { }

  checkUserPassword(uname: string, pwd : string)
  {
    if (uname == "admin" && pwd =="a#123456") {
      localStorage.setItem('username',"admin");
      return true;
    } else {
      return false;
    }
  }

}

