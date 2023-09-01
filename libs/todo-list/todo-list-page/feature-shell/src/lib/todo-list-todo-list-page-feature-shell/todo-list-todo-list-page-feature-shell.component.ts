import { Component, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { TodoListPageDataAccessService, TodoListState } from '@overkill-monorepo/todo-list/todo-list-page/data-access';
import { HttpClientModule } from '@angular/common/http';
import { JokeState } from '@overkill-monorepo/shared/joke/data-access';

export const ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('@overkill-monorepo/todo-list/todo-list-page/feature').then(m => m.TodoListTodoListPageFeatureComponent),
    providers: [importProvidersFrom(NgxsModule.forFeature([TodoListState, JokeState]), HttpClientModule), TodoListPageDataAccessService],
  },
];

@Component({
  selector: 'overkill-monorepo-todo-list-todo-list-page-feature-shell',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: '<router-outlet></router-outlet>',
})
export class TodoListTodoListPageFeatureShellComponent {}
