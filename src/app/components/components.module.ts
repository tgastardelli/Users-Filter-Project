import { NgModule } from "@angular/core";
import { UserDetailsComponent } from './user-details/user-details.component';
import { AngularMaterialModule } from "../angular-material/angular-material.module";
import { FilterComponent } from './filter/filter.component';
import { CommonModule } from "@angular/common";
import { UsersListComponent } from './users-list/users-list.component';
import { PipesModule } from "../pipes/pipes.module";

@NgModule({
  declarations: [
    UserDetailsComponent,
    FilterComponent,
    UsersListComponent
  ],
  imports: [
    AngularMaterialModule,
    CommonModule,
    PipesModule
  ],
  exports: [
    UserDetailsComponent,
    FilterComponent,
    UsersListComponent
  ]
})
export class ComponentsModule {}
