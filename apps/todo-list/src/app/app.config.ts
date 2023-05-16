import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withEnabledBlockingInitialNavigation } from '@angular/router';
import { ROUTES } from './app.routes';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsModule } from '@ngxs/store';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(ROUTES, withEnabledBlockingInitialNavigation()),
    importProvidersFrom(NgxsModule.forRoot([]), NgxsReduxDevtoolsPluginModule.forRoot()),
  ],
};
