import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '@overkill-monorepo/shared/ui-components';
import { Router } from '@angular/router';
import { SharedJokeFeatureComponent } from '@overkill-monorepo/shared/joke/feature';

@Component({
  selector: 'overkill-monorepo-todo-list-homepage-feature',
  standalone: true,
  imports: [CommonModule, ButtonComponent, SharedJokeFeatureComponent],
  templateUrl: './todo-list-homepage-feature.component.html',
})
export class TodoListHomepageFeatureComponent {
  router: Router = inject(Router);

  onGoTodoList(): void {
    this.router.navigateByUrl('/todo-list');
  }
}
