import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItemType } from '@overkill-monorepo/todo-list/todo-list-page/util';
import { ButtonComponent } from '@overkill-monorepo/shared/ui-components';

@Component({
  selector: 'overkill-monorepo-todo-item',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './todo-item.component.html',
})
export class TodoItemComponent {
  @Input({ required: true }) todoItem!: TodoItemType;

  @Output() deleteTodoItem = new EventEmitter<TodoItemType>();
  @Output() checkTodoItem = new EventEmitter<TodoItemType>();

  buttonClickHandler(todoItem: TodoItemType): void {
    this.deleteTodoItem.emit(todoItem);
  }

  checkButtonClickHandler(todoItem: TodoItemType, checked: boolean): void {
    this.checkTodoItem.emit({ ...todoItem, completed: checked });
  }
}
