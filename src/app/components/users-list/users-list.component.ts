import { Component, EventEmitter, Output } from '@angular/core';
import { UsersList } from 'src/app/data/users-list';
import { IUser } from 'src/app/interfaces/user/user.interface';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent {
  public displayedColumns: string[] = ['name', 'date', 'status'];
  public usersList: IUser[] = UsersList
  @Output('userSelected') public userSelectedEmitt = new EventEmitter<IUser>();

  public onUserSelected(user: IUser) {
    console.log('user', user);

    this.userSelectedEmitt.emit(user);
  }
}
