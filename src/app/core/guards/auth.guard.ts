import {CanActivateFn} from '@angular/router';
import {createAuthGuard} from 'keycloak-angular';

export const authGuard: CanActivateFn = createAuthGuard(async (route, state, authData) => {
  const { authenticated, keycloak } = authData;

  if (!authenticated) {
    await keycloak.login({
      redirectUri: window.location.origin + state.url
    });
    return false;
  }

  return true;
});
