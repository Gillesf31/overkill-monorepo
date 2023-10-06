import { importProvidersFrom } from '@angular/core';
import { Routes } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { HttpClientModule } from '@angular/common/http';
import { UserManagementService } from '@overkill-monorepo/user-management/data-access';
import { UserManagementFacade, UserManagementState } from '@overkill-monorepo/user-management/state';

export const ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('@overkill-monorepo/user-management/feature').then(m => m.UserManagementFeatureComponent),
    providers: [importProvidersFrom(NgxsModule.forFeature([UserManagementState]), HttpClientModule), UserManagementService, UserManagementFacade],
  },
];
