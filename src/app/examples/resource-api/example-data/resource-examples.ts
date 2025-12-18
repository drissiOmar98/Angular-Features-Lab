import {ExampleModel} from '../../../shared/models/example.model';


export const RESOURCE_EXAMPLES: ExampleModel[] = [
  {
    title: 'Basic Resource Creation',
    content: 'Learn fundamental resource() patterns for reactive data management. Create your first resource with automatic loading states and error handling.',
    routerLink: './example1',
  },
  {
    title: 'User Data Simulation with resource()',
    content:
      'Demonstrates Angular resource() using signals to fetch simulated user data, including loading states, error handling, and reactive UI updates.',
    routerLink: './example2',
  },
  {
    title: 'User Search with resource()',
    content:
      'Interactive user search powered by resource() and signals. Demonstrates request-based resources, abortable fetch calls, manual reloads, and local resource updates.',
    routerLink: './example5',
  },
  {
    title: 'GitHub User Data with resource()',
    content: 'Fetch random GitHub user profiles using the resource API with real-time data. Demonstrates GitHub API integration with profile interactions and data display.',
    routerLink: './example6',
  },
  {
    title: 'Real-Time Weather Resource',
    content: 'Fetches and displays real-time weather data for a selected city using a free public API. Demonstrates live resource() integration and error handling.',
    routerLink: './example7',
  }
];
