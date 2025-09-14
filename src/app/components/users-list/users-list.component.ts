import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from 'src/app/interfaces/user/user.interface';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent {
  public displayedColumns: string[] = ['name', 'date', 'status'];

  @Input({ required: true }) public usersList: IUser[] = [];
  @Output('userSelected') public userSelectedEmitt = new EventEmitter<IUser>();

  public onUserSelected(user: IUser) {
    console.log('user', user);

    this.userSelectedEmitt.emit(user);
  }
}
