import {Route} from '@angular/router';

const TESTING_ROUTES: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./testing').then(m => m.Testing),
  },
  {
    path: 'example1',
    loadComponent: () => import('./test-example1/test-example1').then(x => x.TestExample1),
  },

];

export default TESTING_ROUTES;
