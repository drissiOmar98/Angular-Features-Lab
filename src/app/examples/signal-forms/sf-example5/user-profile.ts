import {validate, SchemaPathTree, schema, required, applyEach} from '@angular/forms/signals';

export interface UserProfile {
  firstName: string;
  lastName: string;
  socialLinks: string[];
}

export const initialData: UserProfile = {
  firstName: '',
  lastName: '',
  socialLinks: []
}

/**
 * User Profile Form Schema (Single Validator Example)
 *
 * This schema defines the validation rules for a user profile form using Angular Signal Forms.
 * It demonstrates how to apply both field-level validation and array-level validation
 * in a declarative and reactive way.
 */
// Apply a single validator
export const userProfileSchema1 = schema<UserProfile>(rootPath => {
  /**
   * First Name Validation
   *
   * - Uses the `required` helper to ensure that the firstName field is not empty.
   * - Provides a custom error message if the user leaves this field blank.
   */
  required(rootPath.firstName, { message: 'First name is required' });

  /**
   * Social Links Validation
   *
   * - Uses `applyEach` to iterate over the `socialLinks` array.
   * - Applies a reusable URL validator (`url`) to each item.
   * - Ensures every social media link entered is a valid URL format.
   */
  applyEach(rootPath.socialLinks, url)
});


/**
 * Custom URL Validator
 *
 * This reusable function validates whether a string is a valid URL.
 *
 * @param field The schema path tree representing a string field
 * @param options Optional configuration object containing a custom error message
 *
 * Validation Logic:
 * - Uses the built-in JavaScript `URL` constructor to check validity.
 * - If `new URL()` succeeds, returns `null` (no error).
 * - If it throws, returns a `customError` object with `kind: 'url'`.
 *
 * Usage:
 * - Can be applied to individual fields or to arrays using `applyEach`.
 */
// Reusable custom url validator
function url(field: SchemaPathTree<string>, options?: { message?: string }) {
  validate(field, (ctx) => {
    try {
      // Use the URL constructor to determine if the value is a valid url
      new URL(ctx.value());
      return null;
    } catch {
      return {
        kind: 'url',
        message: options?.message || 'Please enter a valid URL',
      };
    }
  });
}
