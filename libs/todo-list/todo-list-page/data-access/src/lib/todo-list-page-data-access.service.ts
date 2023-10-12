import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TodoItemType } from '@overkill-monorepo/todo-list/todo-list-page/util';

@Injectable()
export class TodoListPageDataAccessService {
  readonly #httpClient: HttpClient = inject(HttpClient);
  readonly #apiUrl = 'http://localhost:3000/todo-list';

  public getTodos(): Observable<TodoItemType[]> {
    return this.#httpClient.get<TodoItemType[]>(this.#apiUrl);
  }

  public deleteTodoItem(id: number): Observable<void> {
    return this.#httpClient.delete<void>(`${this.#apiUrl}/${id}`);
  }

  public addTodoItem(newTodoItem: TodoItemType): Observable<TodoItemType> {
    return this.#httpClient.post<TodoItemType>(`${this.#apiUrl}`, newTodoItem);
  }

  public updateTodoItem(updatedTodoItem: TodoItemType): Observable<TodoItemType> {
    return this.#httpClient.put<TodoItemType>(`${this.#apiUrl}/${updatedTodoItem.id}`, updatedTodoItem);
  }
}
