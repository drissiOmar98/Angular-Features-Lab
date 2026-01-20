import { Routes } from '@angular/router';
import {Home} from './home/home';


export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'resource-api',
    loadChildren: () => import('./examples/resource-api/resource-api.routes'),
  },
  {
    path: 'linked-signal',
    loadChildren: () => import('./examples/linked-signal/linked-signal.routes'),
  },
  {
    path: 'testing',
    loadChildren: () => import('./examples/testing/testing.routes'),
  },
  {
    path: '**',
    redirectTo: ''
  },
];
