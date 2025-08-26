import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Store } from '@ngxs/store';
import { SharedJokeFeatureComponent } from '@overkill-monorepo/shared/joke/feature';
import { UserManagementFacade } from '@overkill-monorepo/user-management/state';
import { UserManagementTableComponent } from '@overkill-monorepo/user-management/ui';
import { UserType } from '@overkill-monorepo/user-management/util';

@Component({
  selector: 'overkill-monorepo-user-management-feature',
  standalone: true,
  imports: [CommonModule, UserManagementTableComponent, SharedJokeFeatureComponent],
  providers: [Store],
  templateUrl: './user-management-feature.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserManagementFeatureComponent implements OnInit {
  public readonly userManagementFacade = inject(UserManagementFacade);
  public users = toSignal(this.userManagementFacade.users$, { initialValue: [] });

  public ngOnInit(): void {
    this.userManagementFacade.fetchAll();
  }

  public handleDeleteUser(user: UserType): void {
    this.userManagementFacade.delete(user.id);
  }
}
