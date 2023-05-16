import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('@overkill-monorepo/todo-list/homepage/feature').then(m => m.TodoListHomepageFeatureComponent),
  },
  {
    path: 'todo-list',
    loadChildren: () => import('@overkill-monorepo/todo-list/todo-list-page/feature-shell').then(m => m.ROUTES),
  },
];

@Component({
  selector: 'overkill-monorepo-todo-list-homepage-feature-shell',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: '<router-outlet></router-outlet>',
})
export class TodoListHomepageFeatureShellComponent {}
