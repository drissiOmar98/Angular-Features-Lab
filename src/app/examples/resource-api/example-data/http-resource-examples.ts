import {ExampleModel} from '../../../shared/models/example.model';


export const HTTP_RESOURCE_EXAMPLES: ExampleModel[] = [
  {
    title: 'Basic httpResource() Post Fetch',
    content:
      'Demonstrates httpResource() using a reactive URL signal to fetch posts from the JSONPlaceholder API. Includes loading, error handling, and reactive updates.',
    routerLink: './example3',
  },
  {
    title: 'Pagination with httpResource',
    content: 'Discover httpResource() with pagination functionality using dynamic parameters for fetching paginated todo data. Modern approach to data navigation.',
    routerLink: './example4',
  },
];
