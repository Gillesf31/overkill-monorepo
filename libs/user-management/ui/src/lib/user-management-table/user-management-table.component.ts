import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserType } from '@overkill-monorepo/user-management/util';
import { ButtonComponent } from '@overkill-monorepo/shared/ui-components';

@Component({
  selector: 'overkill-monorepo-user-management-table',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './user-management-table.component.html',
})
export class UserManagementTableComponent {
  @Input({ required: true }) users: UserType[] | null = null;
  @Output() deleteUser = new EventEmitter<UserType>();

  onDeleteUser(user: UserType): void {
    this.deleteUser.emit(user);
  }
}
