import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { UserType } from '@overkill-monorepo/user-management/util';
import { Observable } from 'rxjs';

@Injectable()
export class UserManagementService {
  readonly #httpClient: HttpClient = inject(HttpClient);
  readonly #apiUrl = 'http://localhost:3001/users';

  public getUsers(): Observable<UserType[]> {
    return this.#httpClient.get<UserType[]>(this.#apiUrl);
  }

  public deleteUser(id: number): Observable<void> {
    return this.#httpClient.delete<void>(`${this.#apiUrl}/${id}`);
  }
}
