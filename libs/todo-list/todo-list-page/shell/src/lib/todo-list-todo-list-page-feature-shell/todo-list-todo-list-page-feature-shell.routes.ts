import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { Routes } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { TodoListFacade, TodoListState } from '@overkill-monorepo/todo-list/state';
import { TodoListPageDataAccessService } from '@overkill-monorepo/todo-list/todo-list-page/data-access';

export const ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('@overkill-monorepo/todo-list/todo-list-page/feature').then(m => m.TodoListTodoListPageFeatureComponent),
    providers: [importProvidersFrom(NgxsModule.forFeature([TodoListState])), provideHttpClient(), TodoListPageDataAccessService, TodoListFacade],
  },
];
