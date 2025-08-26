import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { ButtonComponent } from '@overkill-monorepo/shared/ui-components';
import { UserType } from '@overkill-monorepo/user-management/util';

@Component({
  selector: 'overkill-monorepo-user-management-table',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './user-management-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserManagementTableComponent {
  public users = input.required<UserType[] | null>();
  public deleteUser = output<UserType>();

  public onDeleteUser(user: UserType): void {
    this.deleteUser.emit(user);
  }
}
