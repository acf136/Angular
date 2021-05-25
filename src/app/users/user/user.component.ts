import { Component, OnInit } from '@angular/core';
import { IUser } from '../../shared/interfaces';
import { UsersService } from '../../shared/service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {

  public users: IUser[] = [];
  public selectedUser: IUser;
  public f_user : IUser =  {} as IUser; //{ id: 0, name: '', secondName : '', email : '', impagado : false }  ;

  constructor(private usersService: UsersService ) {   }

  ngOnInit(): void {
    this.loadData();
    this.selectedUser = this.users[0];
    this.f_user = this.selectedUser;
  }

  /**
   * Use usersService.getUsers() that returns an observable$
   */
  loadData() {
    this.usersService.getUsers()
      .subscribe(
        pa_users => this.users = pa_users,
        err => { alert('Error caught at Subscriber on url "' + err.url + '" in ' + this.usersService.getUsers.name ); },
        () => console.log('Processing '+ this.usersService.getUsers.name +' Complete.')
      );
  }

  /**
   * called in <li *ngFor="let user of users; index as i" (click)="goToDetails(i)">
   *
   * Look for element that has the position p_i in array of users and assign to selectedUser
   *
   * @param {number} p_i Number index of array users to go
   */
  goToDetails(p_i: number) {
    this.selectedUser = this.users[p_i];
    this.f_user = this.selectedUser;
  }

  // CRUD operations
  add(p_name: string) {
    this.usersService.createUser(p_name)
      .subscribe( p_user => this.users.push(p_user) ) ;
  }
  // change the user selectedUser by f_user
  update(p_user: IUser) {
    const user2Update = { id: this.selectedUser.id, name: p_user.name, secondName: p_user.secondName , email: p_user.email , impagado: p_user.impagado } ;
    this.usersService.updateUser( p_user.id , user2Update )
      .subscribe( () => this.users.find(user => user.id === p_user.id)[0] = user2Update )  ;
    }

  remove(p_user: IUser) {
    this.usersService.deleteUser(p_user.id)
      .subscribe( () => this.users = this.users.filter(selected => selected !== p_user) );
  }

}

