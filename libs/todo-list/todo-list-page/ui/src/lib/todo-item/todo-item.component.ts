import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { ButtonComponent } from '@overkill-monorepo/shared/ui-components';
import { TodoItemType } from '@overkill-monorepo/todo-list/todo-list-page/util';

@Component({
  selector: 'overkill-monorepo-todo-item',
  imports: [CommonModule, ButtonComponent],
  templateUrl: './todo-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoItemComponent {
  public todoItem = input.required<TodoItemType>();

  public deleteTodoItem = output<TodoItemType>();
  public checkTodoItem = output<TodoItemType>();

  public buttonClickHandler(todoItem: TodoItemType): void {
    this.deleteTodoItem.emit(todoItem);
  }

  public checkButtonClickHandler(todoItem: TodoItemType, checked: boolean): void {
    this.checkTodoItem.emit({ ...todoItem, completed: checked });
  }
}
