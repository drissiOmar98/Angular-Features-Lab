import {Route} from '@angular/router';


const SIGNAL_FORMS_ROUTES: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./signal-forms').then(m => m.SignalForms)
  },
  {
    path: 'example1',
    loadComponent: () =>
      import('./sf-example1/sf-example1').then(x => x.SfExample1),
  },
  {
    path: 'example2',
    loadComponent: () =>
      import('./sf-example2/sf-example2').then(x => x.SfExample2),
  },
  {
    path: 'example3',
    loadComponent: () =>
      import('./sf-example3/sf-example3').then(x => x.SfExample3),
  },


];

export default SIGNAL_FORMS_ROUTES;
