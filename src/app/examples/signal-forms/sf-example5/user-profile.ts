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
 * User Profile Form Schema (Multiple Validators Example)
 *
 * Demonstrates how to apply multiple validators to both single fields and
 * array fields in Angular Signal Forms.
 *
 * Features:
 * - Required field validation
 * - URL validation for array items
 * - Declarative, reusable approach
 */
// Apply a set of validators
export const userProfileSchema = schema<UserProfile>(rootPath => {
  required(rootPath.firstName, { message: 'First name is required' });

  /**
   * Social Links Array Validation
   *
   * - `applyEach` iterates over every item in the `socialLinks` array.
   * - Each item must be non-empty (`required`) if added.
   * - Each item must be a valid URL using the reusable `url` validator.
   */
  applyEach(rootPath.socialLinks, (path) => {
    required(path, { message: 'If added, the social link is required' });
    url(path, { message: 'The social link must be a valid URL' });
  })
});

/**
 * User Profile Form Schema (Array Validators via Separate Function)
 *
 * This variant shows how to separate array item validation into a reusable function.
 * Improves maintainability when the same rules are applied across multiple arrays.
 */
// Apply a set of validators using a separate function
export const userProfileSchema3 = schema<UserProfile>(rootPath => {
  required(rootPath.socialLinks, { message: 'If added, the social link is required' });
  applyEach(rootPath.socialLinks, linksSchema)
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

/**
 * Social Links Item Validation
 *
 * Defines the validation rules for each individual social link in the array.
 * Reusable function for `applyEach`.
 *
 * Rules:
 * - Each link is required (cannot be empty if added)
 * - Each link must be a valid URL
 */
// Define the set of validation rules for the array items
const linksSchema = schema<string>((link) => {
  required(link, { message: 'If added, the social link is required' });
  url(link);
});
