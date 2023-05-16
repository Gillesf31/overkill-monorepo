import { Component, importProvidersFrom } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { HttpClientModule } from '@angular/common/http';
import { UserManagementService, UserManagementState } from '@overkill-monorepo/user-management/data-access';
import { CommonModule } from '@angular/common';

export const ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('@overkill-monorepo/user-management/feature').then(m => m.UserManagementFeatureComponent),
    providers: [importProvidersFrom(NgxsModule.forFeature([UserManagementState]), HttpClientModule), UserManagementService],
  },
];

@Component({
  selector: 'overkill-monorepo-user-management-feature-shell',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: '<router-outlet></router-outlet>',
})
export class UserManagementFeatureShellComponent {}
