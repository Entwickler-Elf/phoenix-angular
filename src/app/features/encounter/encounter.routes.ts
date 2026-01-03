import { Routes } from '@angular/router';
import {EncounterListComponent} from './components/encounter-list/encounter-list.component';
import {EncounterFormComponent} from './components/encounter-form/encounter-form.component';
import {EncounterDetailComponent} from './components/encounter-detail/encounter-detail.component';
import {EncounterComponent} from './encounter-component';


export const ENCOUNTER_ROUTES: Routes = [
  {
    path: '', // The base path (e.g., /encounters)
    component: EncounterComponent,
    title: 'All Encounters',
    children: [
      { path: '',
        component: EncounterListComponent,
        title: 'All Encounters'
      },
      { path: 'new', // Path to create a new encounter (/encounters/new)
        component: EncounterFormComponent,
        title: 'New Encounter'
      },
      {
        path: ':id', // Path to view a specific encounter (/encounters/123)
        component: EncounterDetailComponent,
        title: 'Encounter Details'
      },
      {
        path: ':id/edit', // Path to edit an encounter (/encounters/123/edit)
        component: EncounterFormComponent,
        title: 'Edit Encounter'
      }
    ]
  },
];
