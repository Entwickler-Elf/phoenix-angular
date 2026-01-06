// src/app/app.routes.ts
import {Routes} from '@angular/router';
import {NotFoundComponent} from './layout/not-found-component/not-found-component';
import {authGuard} from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'encounters',
    canActivate: [authGuard],
    loadChildren: () => import('./features/encounter/encounter.routes').then(m => m.ENCOUNTER_ROUTES)
  },
  { path: '', redirectTo: 'encounters', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];
