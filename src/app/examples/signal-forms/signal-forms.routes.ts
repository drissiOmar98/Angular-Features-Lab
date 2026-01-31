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



];

export default SIGNAL_FORMS_ROUTES;
