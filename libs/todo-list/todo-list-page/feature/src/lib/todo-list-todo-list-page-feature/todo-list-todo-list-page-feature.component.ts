import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoActions, TodoListState } from '@overkill-monorepo/todo-list/todo-list-page/data-access';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { TodoItemType } from '@overkill-monorepo/todo-list/todo-list-page/util';
import { TodoItemComponent } from '@overkill-monorepo/todo-list/todo-list-page/ui';
import { Select, Store } from '@ngxs/store';
import { InputGroupComponent } from '@overkill-monorepo/shared/ui-components';

@Component({
  selector: 'overkill-monorepo-todo-list-todo-list-page-feature',
  standalone: true,
  imports: [CommonModule, HttpClientModule, TodoItemComponent, InputGroupComponent],
  providers: [Store],
  templateUrl: './todo-list-todo-list-page-feature.component.html',
})
export class TodoListTodoListPageFeatureComponent implements OnInit {
  @Select(TodoListState.todoItems) todoList$!: Observable<TodoItemType[]>;
  private readonly store: Store = inject(Store);

  ngOnInit(): void {
    this.store.dispatch(new TodoActions.FetchAll());
  }

  handleDeleteTodoItem(todoItem: TodoItemType): void {
    this.store.dispatch(new TodoActions.Delete(todoItem.id));
  }

  handleAddTodoItem(inputText: string): void {
    this.store.dispatch(new TodoActions.Add(inputText));
  }

  handleCheckTodoItem(todoItem: TodoItemType): void {
    this.store.dispatch(new TodoActions.Update(todoItem));
  }
}
