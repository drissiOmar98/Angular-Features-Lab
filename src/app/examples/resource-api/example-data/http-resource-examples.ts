import {ExampleModel} from '../../../shared/models/example.model';


export const HTTP_RESOURCE_EXAMPLES: ExampleModel[] = [
  {
    title: 'Basic httpResource() Post Fetch',
    content:
      'Demonstrates httpResource() using a reactive URL signal to fetch posts from the JSONPlaceholder API. Includes loading, error handling, and reactive updates.',
    routerLink: './example3',
  },
  {
    title: 'Country Info with httpResource',
    content: 'Fetch and display live country information (name, capital, region, population, flag) using httpResource and the REST Countries API. Select a country to view its details in real time.',
    routerLink: './example9',
  }
];
