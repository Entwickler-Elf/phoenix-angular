import {KeycloakService} from 'keycloak-angular';

export function initializeKeycloak(keycloak: KeycloakService) {
  return () => {
    // Check if we are in a secure context before trying to init Keycloak
    if (!window.isSecureContext && window.location.hostname !== 'localhost') {
      console.error('Keycloak requires a secure context (HTTPS or localhost).');
      // You could optionally redirect to an "Insecure Connection" warning page here
    }

    return keycloak.init({
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
}

