import {Route} from '@angular/router';

const LINKED_ROUTES: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./linked-signal').then(m => m.LinkedSignal),
  },


];

export default LINKED_ROUTES;
