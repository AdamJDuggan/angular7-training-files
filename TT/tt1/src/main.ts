import './styles.main.css';

import { enableProdMode } from '@angular/core';
//since we are building an Angular application for the browser we are going to include the
//browser platform. Browser platform dynamic helps with errors. We will want to change this when we
//launch our broswer application
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

