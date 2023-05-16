import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '@overkill-monorepo/shared/ui-components';

@Component({
  selector: 'overkill-monorepo-todo-add-input',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './todo-add-input.component.html',
})
export class TodoAddInputComponent {
  buttonClickHandler(): void {
    console.log('button clicked');
  }
}
