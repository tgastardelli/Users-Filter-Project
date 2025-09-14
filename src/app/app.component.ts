import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { UsersList } from './data/users-list';
import { IFilterOptions } from './interfaces/filter_options.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public usersList: IUser[] = [];
  public userListFiltered: IUser[] = [];
  public userSelected: IUser = {} as IUser;
  public showUserDetails: boolean = false;

  public ngOnInit(): void {
    setTimeout(() => {
      this.usersList = UsersList;
      this.userListFiltered = this.usersList;
    }, 1);
  }

  public onUserSelected(user: IUser) {
    this.userSelected = user;

    this.showUserDetails = true;
  }

  public filterSelected(filterOptions: IFilterOptions) {
    console.log(filterOptions);

    this.userListFiltered = this.filterUsersList(filterOptions, this.usersList)
  }

  public filterUsersList(filterOptions: IFilterOptions, usersList: IUser[]): IUser[] {
    let filteredList: IUser[] = [];

    filteredList = this.filterUsersListByName(filterOptions.name, usersList);
    filteredList = this.filterUsersListByStatus(filterOptions.status, filteredList);

    return filteredList;
  }

  filterUsersListByStatus(status: boolean | undefined, usersList: IUser[]): IUser[] {
    const STATUS_NOT_SELECTED = status === undefined;

    if (STATUS_NOT_SELECTED) {
      return usersList;
    }

    const filteredList = usersList.filter((user) => user.ativo === status);

    return filteredList;
  }

  public filterUsersListByName(name: string | undefined, usersList: IUser[]): IUser[] {
    const NAME_NOT_TYPED = name === undefined;

    if (NAME_NOT_TYPED) {
      return usersList;
    }

    const filteredList = usersList.filter((user) => user.nome.toLocaleLowerCase().includes(name.toLocaleLowerCase()));

    return filteredList;
  }


}
