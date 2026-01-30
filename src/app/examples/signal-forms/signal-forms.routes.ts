import {Route} from '@angular/router';


const SIGNAL_FORMS_ROUTES: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./signal-forms').then(m => m.SignalForms)
  }



];

export default SIGNAL_FORMS_ROUTES;
