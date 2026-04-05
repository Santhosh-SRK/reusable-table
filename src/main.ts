import '@angular/compiler';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { enableProdMode } from '@angular/core';
import { env }  from './environments/env'

if (env.production) {
  enableProdMode();
  // window.console.log = function () {}; // Disable console.log in production
  // window.console.warn = function () {}; // Disable console.warn in production
  // window.console.debug = function () {}; // Disable console.debug in production
}

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
