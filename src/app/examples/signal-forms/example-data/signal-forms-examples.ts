import {ExampleModel} from '../../../shared/models/example.model';


export const SIGNAL_FORM_EXAMPLES: ExampleModel[] = [
  {
    title: 'Example 1:  Signal-Based Login Form',
    content: 'Builds a fully validated login form from scratch using signals, schema-driven structure, and submission state management.',
    routerLink: '/signal-forms/example1'
  },
  {
    title: 'Example 2:  Signal-Based Registration Form',
    content: 'A complete registration form using writable signals, schema-driven validation, custom password matching, multi-field validation strategies, and conditional field rendering.',
    routerLink: '/signal-forms/example2'
  },
  {
    title: 'Example 3: Dynamic Validation with Signal Forms',
    content: 'Demonstrates conditional and group-based validation using when and applyWhen, real-time schema value access, and reactive UI feedback in a newsletter subscription form.',
    routerLink: '/signal-forms/example3'
  },
  {
    title: 'Example 4: Signal Form Signup with Dynamic Hobbies & Validation',
    content: 'Signup form with name, email, and dynamic hobbies fields. Features schema-based validation, instant error feedback, and interactive add/remove for hobbies using Angular signals.',
    routerLink: '/signal-forms/example4'
  },
  {
    title: 'Example 5: Signal Forms Arrays – Repeating Fields & Validation',
    content: 'Build a form with repeating fields using arrays. Apply validation to each item, create a custom URL validator, and handle dynamic user input efficiently with Angular Signal Forms.',
    routerLink: '/signal-forms/example5'
  },
  {
    title: 'Example 6: Signal Forms – Validating Arrays of Objects',
    content: 'Demonstrates how to validate repeating arrays of objects using Angular Signal Forms. Covers per-item validation with applyEach, conditional required rules, min/max constraints, regex patterns, and custom URL validators.',
    routerLink: '/signal-forms/example6'
  }


];
