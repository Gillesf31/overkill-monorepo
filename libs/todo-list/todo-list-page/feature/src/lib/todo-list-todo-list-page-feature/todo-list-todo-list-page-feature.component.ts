import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { InputGroupComponent } from '@overkill-monorepo/shared/ui-components';
import { TodoListFacade } from '@overkill-monorepo/todo-list/state';
import { TodoItemComponent } from '@overkill-monorepo/todo-list/todo-list-page/ui';
import { TodoItemType } from '@overkill-monorepo/todo-list/todo-list-page/util';

@Component({
  selector: 'overkill-monorepo-todo-list-todo-list-page-feature',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, InputGroupComponent],
  providers: [Store],
  templateUrl: './todo-list-todo-list-page-feature.component.html',
})
export class TodoListTodoListPageFeatureComponent implements OnInit {
  public readonly todoListFacade: TodoListFacade = inject(TodoListFacade);

  public ngOnInit(): void {
    this.todoListFacade.fetchAll();
  }

  public handleDeleteTodoItem(todoItem: TodoItemType): void {
    this.todoListFacade.delete(todoItem.id);
  }

  public handleAddTodoItem(inputText: string): void {
    this.todoListFacade.add(inputText);
  }

  public handleCheckTodoItem(todoItem: TodoItemType): void {
    this.todoListFacade.update(todoItem);
  }
}
