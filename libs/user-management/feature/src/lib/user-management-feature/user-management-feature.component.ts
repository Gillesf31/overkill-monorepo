import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserType } from '@overkill-monorepo/user-management/util';
import { UserManagementTableComponent } from '@overkill-monorepo/user-management/ui';
import { Store } from '@ngxs/store';
import { SharedJokeFeatureComponent } from '@overkill-monorepo/shared/joke/feature';
import { UserManagementFacade } from '@overkill-monorepo/user-management/state';

@Component({
  selector: 'overkill-monorepo-user-management-feature',
  standalone: true,
  imports: [CommonModule, UserManagementTableComponent, SharedJokeFeatureComponent],
  providers: [Store],
  templateUrl: './user-management-feature.component.html',
})
export class UserManagementFeatureComponent implements OnInit {
  public readonly userManagementFacade = inject(UserManagementFacade);

  public ngOnInit(): void {
    this.userManagementFacade.fetchAll();
  }

  public handleDeleteUser(user: UserType): void {
    this.userManagementFacade.delete(user.id);
  }
}
