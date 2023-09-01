import { Component, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { JokeService, JokeState } from '@overkill-monorepo/shared/joke/data-access';
import { HttpClientModule } from '@angular/common/http';

export const ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('@overkill-monorepo/todo-list/homepage/feature').then(m => m.TodoListHomepageFeatureComponent),
    providers: [importProvidersFrom(NgxsModule.forFeature([JokeState]), HttpClientModule), JokeService],
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
