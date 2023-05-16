import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagementState, UsersManagementActions } from '@overkill-monorepo/user-management/data-access';
import { Observable } from 'rxjs';
import { UserType } from '@overkill-monorepo/user-management/util';
import { HttpClientModule } from '@angular/common/http';
import { UserManagementTableComponent } from '@overkill-monorepo/user-management/ui';
import { Select, Store } from '@ngxs/store';
import { SharedJokeFeatureComponent } from '@overkill-monorepo/shared/joke/feature';

@Component({
  selector: 'overkill-monorepo-user-management-feature',
  standalone: true,
  imports: [CommonModule, HttpClientModule, UserManagementTableComponent, SharedJokeFeatureComponent],
  providers: [Store],
  templateUrl: './user-management-feature.component.html',
})
export class UserManagementFeatureComponent implements OnInit {
  @Select(UserManagementState.users) users$!: Observable<UserType[]>;
  private readonly store: Store = inject(Store);

  ngOnInit(): void {
    this.store.dispatch(new UsersManagementActions.FetchAll());
  }

  handleDeleteUser(user: UserType): void {
    this.store.dispatch(new UsersManagementActions.Delete(user.id));
  }
}
