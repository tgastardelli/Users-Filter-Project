import { Component } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public userSelected: IUser = {} as IUser;
  public showUserDetails: boolean = false;

  public onUserSelected(user: IUser) {
    this.userSelected = user;

    this.showUserDetails = true;
  }
}
