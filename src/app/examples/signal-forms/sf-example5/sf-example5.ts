import {Component, signal} from '@angular/core';
import {initialData, UserProfile} from './user-profile';
import {form} from '@angular/forms/signals';

@Component({
  selector: 'app-sf-example5',
  imports: [],
  templateUrl: './sf-example5.html',
  styleUrl: './sf-example5.scss',
})
export class SfExample5 {

  // Create a form model signal with form fields
  // This represents the form's data structure
  /**
   * Form model signal
   *
   * Holds the reactive state of the user profile form.
   * Signals allow Angular to track changes and update the UI efficiently.
   */
  userProfileModel = signal<UserProfile>(initialData);

  /**
   * Signal-based form
   *
   * Creates a form abstraction from the `userProfileModel`.
   * This is where validation, reactive updates, and array handling
   * (e.g., `socialLinks`) are applied.
   */
  // Declare a form from the model and logic rules schema
  userProfileForm = form(this.userProfileModel);

}
