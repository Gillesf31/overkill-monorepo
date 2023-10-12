import { inject, Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { TodoItemType } from '@overkill-monorepo/todo-list/todo-list-page/util';
import { TodoListState } from './todo-list-page.state';
import { TodoActions } from './todo-list-page.action';

@Injectable()
export class TodoListFacade {
  @Select(TodoListState.todoItems) todoList$!: Observable<TodoItemType[]>;

  readonly #store: Store = inject(Store);

  public fetchAll(): void {
    this.#store.dispatch(new TodoActions.FetchAll());
  }

  public delete(id: number): void {
    this.#store.dispatch(new TodoActions.Delete(id));
  }

  public add(todoLabel: string): void {
    this.#store.dispatch(new TodoActions.Add(todoLabel));
  }

  public update(todoItem: TodoItemType): void {
    this.#store.dispatch(new TodoActions.Update(todoItem));
  }
}
