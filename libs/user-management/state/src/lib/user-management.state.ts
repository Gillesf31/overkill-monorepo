import { inject, Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Observable, tap, throwError } from 'rxjs';
import { UserType } from '@overkill-monorepo/user-management/util';
import { UsersManagementActions } from './user-management.action';
import { UserManagementService } from '@overkill-monorepo/user-management/data-access';

export type UserManagementStateType = {
  users: UserType[];
};

@State<UserManagementStateType>({
  name: 'userManagement',
  defaults: {
    users: [],
  },
})
@Injectable()
export class UserManagementState {
  private readonly userManagementService: UserManagementService = inject(UserManagementService);

  @Selector()
  static users(state: UserManagementStateType): UserType[] {
    return state.users;
  }

  @Action(UsersManagementActions.FetchAll)
  fetchAll(ctx: StateContext<UserManagementStateType>): Observable<UserType[]> {
    return this.userManagementService.getUsers().pipe(
      tap((users: UserType[]) => {
        const state: UserManagementStateType = ctx.getState();
        ctx.setState({
          ...state,
          users,
        });
      })
    );
  }

  @Action(UsersManagementActions.Delete)
  delete(ctx: StateContext<UserManagementStateType>, action: UsersManagementActions.Delete): Observable<void> {
    const state: UserManagementStateType = ctx.getState();

    const foundUser: UserType | undefined = state.users.find((user: UserType) => user.id === action.id);

    if (!foundUser) {
      return throwError(() => 'User not found');
    }

    return this.userManagementService.deleteUser(foundUser.id).pipe(
      tap(() => {
        const index: number = state.users.indexOf(foundUser);
        const users: UserType[] = state.users.slice(0, index).concat(state.users.slice(index + 1));

        ctx.patchState({
          ...state,
          users,
        });
      })
    );
  }
}
