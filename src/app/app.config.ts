import {provideRouter} from '@angular/router';
import {ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection} from '@angular/core';
import {includeBearerTokenInterceptor, provideKeycloak} from 'keycloak-angular';

import {routes} from './app.routes';
import {provideHttpClient, withInterceptors} from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([includeBearerTokenInterceptor])
    ),
    provideKeycloak({
      config: {
        url: 'http://zeus:9090',
        realm: 'phoenix-realm',
        clientId: 'phoenix-angular'
      },
      initOptions: {
        onLoad: 'login-required',
        checkLoginIframe: false,
        redirectUri: `${window.location.origin}/encounters`
      },
    }),
    provideBrowserGlobalErrorListeners(),

  ]
};
