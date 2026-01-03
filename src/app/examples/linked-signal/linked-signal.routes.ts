import {Route} from '@angular/router';

const LINKED_ROUTES: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./linked-signal').then(m => m.LinkedSignal),
  },
  {
    path: 'example1',
    loadComponent: () => import('./ls-example1/ls-example1').then(x => x.LsExample1),
  },


];

export default LINKED_ROUTES;
