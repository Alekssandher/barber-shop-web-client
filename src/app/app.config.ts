import { ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations'
import { provideRouter } from '@angular/router';
import { provideNgxMask } from 'ngx-mask';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideNativeDateAdapter } from '@angular/material/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi()),
    provideNgxMask({}),
    provideNativeDateAdapter()
  ]
};
