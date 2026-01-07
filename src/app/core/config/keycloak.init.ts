import { KeycloakService } from 'keycloak-angular';

export function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://zeus:9090',
        realm: 'phoenix-realm',
        clientId: 'phoenix-angular'
      },
      initOptions: {
        onLoad: 'login-required',
        checkLoginIframe: false,
        // This ensures the user is sent to /encounters after login
        redirectUri: window.location.origin + '/encounters'
      },
      enableBearerInterceptor: true,
      bearerPrefix: 'Bearer',
      bearerExcludedUrls: ['/assets']
    });
}
