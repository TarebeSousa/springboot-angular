import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

const appProviders = [
  ...appConfig.providers,
  provideHttpClient()
];

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: appProviders
}).catch((err) => console.error(err));