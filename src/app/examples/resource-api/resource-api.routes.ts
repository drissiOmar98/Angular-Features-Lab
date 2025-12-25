import {Route} from '@angular/router';

const RESOURCE_API_ROUTES: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./resource-api').then(m => m.ResourceApi),
  },
  {
    path: 'example1',
    loadComponent: () =>
      import('./resource-api-example1/resource-api-example1').then(x => x.ResourceApiExample1),
  },
  {
    path: 'example2',
    loadComponent: () =>
      import('./resource-api-example2/resource-api-example2').then(x => x.ResourceApiExample2),
  },
  {
    path: 'example3',
    loadComponent: () =>
      import('./resource-api-example3/resource-api-example3').then(x => x.ResourceApiExample3),
  },
  {
    path: 'example4',
    loadComponent: () =>
      import('./resource-api-example4/resource-api-example4').then(x => x.ResourceApiExample4),
  },
  {
    path: 'example5',
    loadComponent: () =>
      import('./resource-api-example5/resource-api-example5').then(x => x.ResourceApiExample5),
  },
  {
    path: 'example6',
    loadComponent: () =>
      import('./resource-api-example6/resource-api-example6').then(x => x.ResourceApiExample6),
  },
  {
    path: 'example7',
    loadComponent: () =>
      import('./resource-api-example7/resource-api-example7').then(x => x.ResourceApiExample7),
  },
  {
    path: 'example8',
    loadComponent: () =>
      import('./resource-api-example8/resource-api-example8').then(x => x.ResourceApiExample8),
  },
  {
    path: 'example9',
    loadComponent: () =>
      import('./resource-api-example9/resource-api-example9').then(x => x.ResourceApiExample9),
  },
  {
    path: 'example10',
    loadComponent: () =>
      import('./resource-api-example10/resource-api-example10').then(x => x.ResourceApiExample10),
  },

]

export default RESOURCE_API_ROUTES;
