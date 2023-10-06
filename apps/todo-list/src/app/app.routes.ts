import { Route } from '@angular/router';

export const ROUTES: Route[] = [
  {
    path: '',
    loadChildren: () => import('@overkill-monorepo/todo-list/homepage/shell').then(m => m.ROUTES),
  },
];
