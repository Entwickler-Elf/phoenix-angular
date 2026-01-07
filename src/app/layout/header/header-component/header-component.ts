import {Component, inject} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import Keycloak from 'keycloak-js';

@Component({
  selector: 'app-header-component',
  imports: [
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css',
})
export class HeaderComponent {
  // In keycloak-angular v21, the Keycloak class itself is the injection token
  private readonly keycloak = inject(Keycloak);

  public async logout() {
    await this.keycloak.logout({
      redirectUri: window.location.origin
    });
  }
}
