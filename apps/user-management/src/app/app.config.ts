import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withEnabledBlockingInitialNavigation } from '@angular/router';
import { ROUTES } from '@overkill-monorepo/user-management/feature-shell';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(ROUTES, withEnabledBlockingInitialNavigation()),
    importProvidersFrom(NgxsModule.forRoot([]), NgxsReduxDevtoolsPluginModule.forRoot()),
  ],
};
