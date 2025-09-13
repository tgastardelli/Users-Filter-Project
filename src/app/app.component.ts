import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { UsersList } from './data/users-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public usersList: IUser[] = [];
  public userSelected: IUser = {} as IUser;
  public showUserDetails: boolean = false;

  public ngOnInit(): void {
    setTimeout(() => {
      this.usersList = UsersList;
    }, 3000);
  }

  public onUserSelected(user: IUser) {
    this.userSelected = user;

    this.showUserDetails = true;
  }
}
