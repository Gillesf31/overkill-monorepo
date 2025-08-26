import { provideHttpClient } from '@angular/common/http';
import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('@overkill-monorepo/todo-list/homepage/feature').then(m => m.TodoListHomepageFeatureComponent),
    providers: [provideHttpClient()],
  },
  {
    path: 'todo-list',
    loadChildren: () => import('@overkill-monorepo/todo-list/todo-list-page/shell').then(m => m.ROUTES),
  },
];
