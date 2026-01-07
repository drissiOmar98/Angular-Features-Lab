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
  {
    path: 'example2',
    loadComponent: () => import('./ls-example2/ls-example2').then(x => x.LsExample2),
  },


];

export default LINKED_ROUTES;
