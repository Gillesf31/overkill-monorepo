import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserType } from '@overkill-monorepo/user-management/util';

@Injectable()
export class UserManagementService {
  private readonly httpClient: HttpClient = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:3000/users';

  getUsers(): Observable<UserType[]> {
    return this.httpClient.get<UserType[]>(this.apiUrl);
  }

  deleteUser(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/${id}`);
  }
}
