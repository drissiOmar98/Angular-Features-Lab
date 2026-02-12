import {Routes} from '@angular/router';


const CONTROL_FLOW_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./control-flow').then(m => m.ControlFlow),
  },
  {
    path: 'example1',
    loadComponent: () => import('./ng-template-section/ng-template-example1/ng-template-example1').then(x => x.NgTemplateExample1),
  },
  {
    path: 'example2',
    loadComponent: () => import('./ng-template-section/ng-template-example2/ng-template-example2').then(x => x.NgTemplateExample2),
  },

];

export default CONTROL_FLOW_ROUTES;
