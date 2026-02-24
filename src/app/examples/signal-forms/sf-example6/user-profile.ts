import {applyEach, max, min, pattern, required, schema, SchemaPathTree, validate} from '@angular/forms/signals';

export interface UserProfile {
  firstName: string;
  lastName: string;
  socialLinks: ProfileLink[];
}

export interface ProfileLink {
  linkUrl: string;
  platform: string;
  memberSinceYear: string;
}

export const initialData: UserProfile = {
  firstName: '',
  lastName: '',
  socialLinks: []
}

/**
 * UserProfile Validation Schema (Signal Forms)
 *
 * This schema defines validation rules for a UserProfile form using Angular Signal Forms.
 * It demonstrates declarative, schema-first validation for both simple fields and
 * complex repeating fields (arrays of objects).
 *
 * Key Features:
 *
 * ✅ Schema-first validation
 *   - Keeps all business rules outside the component for clarity and maintainability.
 *
 * ✅ Array of objects validation
 *   - Handles complex repeating fields (`socialLinks`) with per-item validation.
 *
 * ✅ Conditional validation
 *   - Certain fields become required depending on the presence of other fields.
 *   - e.g., `platform` is required if `linkUrl` is entered.
 *
 * ✅ Range & pattern enforcement
 *   - `memberSinceYear` must be between 1990 and the current year.
 *   - Must be 4 digits (YYYY format).
 *
 * ✅ Reusable URL validator
 *   - Validates that a URL is well-formed using the built-in URL constructor.
 */
export const userProfileSchema = schema<UserProfile>(rootPath => {
  required(rootPath.firstName, { message: 'First name is required' });

  // Validate each object in the socialLinks array using a dedicated schema
  applyEach(rootPath.socialLinks, linksSchema);
});

// Define the set of validation rules for the array items
// Social link is required if added
// Social link must be a valid URL
// Platform is required if a social link was entered
// Member since year must be between 1990 and the current year
// Member since year must be 4 digits
/**
 * Validation schema for each social link object
 *
 * Each object in `socialLinks` array is validated with:
 * - linkUrl: required if added, must be a valid URL
 * - platform: required if linkUrl exists
 * - memberSinceYear: numeric, between 1990 and current year, 4-digit format
 */
const linksSchema = schema<ProfileLink>((path) => {
  // Social link URL is required if added
  required(path.linkUrl, { message: 'If added, the social link is required' });

  // Social link must be a valid URL
  url(path.linkUrl, { message: 'The social link must be a valid URL' });

  // Platform is required when linkUrl is provided
  required(path.platform, {
    message: 'Platform name is required when link is entered',
    when: (ctx) => Boolean(ctx.valueOf(path.linkUrl))
  });

   // Year constraints
  min(path.memberSinceYear, minYear, { message: 'Year must be 1990 or later' });
  max(path.memberSinceYear, currentYear, { message: 'Year must be this year or earlier' });

  // Ensure 4-digit year format
  pattern(path.memberSinceYear, /^\d{4}$/, { message: 'Year must be four digits (YYYY)' });
});

// Define dynamic year constraints
const currentYear = new Date().getFullYear();
const minYear = 1990;

// Reusable custom url validator
// NOTE: Validates that the url is well-formed, not that it exists
/**
 * Reusable custom URL validator
 *
 * Ensures the URL is well-formed using the built-in URL constructor.
 * Does NOT check URL existence or reachability.
 *
 * @param field - The Signal Forms field to validate
 * @param options - Optional configuration for custom error messages
 */
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
