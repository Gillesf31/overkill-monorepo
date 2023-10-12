import { inject, Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { UsersManagementActions } from './user-management.action';
import { UserManagementState } from './user-management.state';
import { Observable } from 'rxjs';
import { UserType } from '@overkill-monorepo/user-management/util';

@Injectable()
export class UserManagementFacade {
  @Select(UserManagementState.users) public users$!: Observable<UserType[]>;

  readonly #store: Store = inject(Store);

  public fetchAll(): void {
    this.#store.dispatch(new UsersManagementActions.FetchAll());
  }

  public delete(id: number): void {
    this.#store.dispatch(new UsersManagementActions.Delete(id));
  }
}
