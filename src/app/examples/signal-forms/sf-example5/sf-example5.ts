import {Component, signal} from '@angular/core';
import {initialData, UserProfile, userProfileSchema} from './user-profile';
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
  userProfileForm = form(this.userProfileModel,userProfileSchema);

  /**
   * Adds a new empty social media link to the `socialLinks` array.
   *
   * - Uses the reactive `userProfileModel` signal.
   * - Updates the form model immutably to trigger UI reactivity.
   * - Allows users to dynamically add new input fields for social links.
   */
  addSocialLink() {
    this.userProfileModel.update(profile => ({
      ...profile,
      socialLinks: [...profile.socialLinks, '']
    }));
  }

  /**
   * Removes a social media link at a specified index from the `socialLinks` array.
   *
   * - Uses the reactive `userProfileModel` signal.
   * - Filters out the link at the given index immutably, triggering reactive updates.
   * - Enables users to dynamically remove input fields they no longer need.
   *
   * @param index The zero-based index of the social link to remove
   */
  removeSocialLink(index: number) {
    this.userProfileModel.update(profile => ({
      ...profile,
      socialLinks: profile.socialLinks.filter((_, i) => i !== index)
    }));
  }

}
