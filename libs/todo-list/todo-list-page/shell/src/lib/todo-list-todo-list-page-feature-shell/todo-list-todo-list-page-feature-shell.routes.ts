import { importProvidersFrom } from '@angular/core';
import { Routes } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { TodoListPageDataAccessService } from '@overkill-monorepo/todo-list/todo-list-page/data-access';
import { HttpClientModule } from '@angular/common/http';
import { TodoListFacade, TodoListState } from '@overkill-monorepo/todo-list/state';

export const ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('@overkill-monorepo/todo-list/todo-list-page/feature').then(m => m.TodoListTodoListPageFeatureComponent),
    providers: [importProvidersFrom(NgxsModule.forFeature([TodoListState]), HttpClientModule), TodoListPageDataAccessService, TodoListFacade],
  },
];
