import { ApplicationConfig, importProvidersFrom, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withEnabledBlockingInitialNavigation } from '@angular/router';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsModule } from '@ngxs/store';
import { ROUTES } from '@overkill-monorepo/user-management/shell';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(ROUTES, withEnabledBlockingInitialNavigation()),
    provideZonelessChangeDetection(),
    importProvidersFrom(NgxsModule.forRoot([]), NgxsReduxDevtoolsPluginModule.forRoot()),
  ],
};
