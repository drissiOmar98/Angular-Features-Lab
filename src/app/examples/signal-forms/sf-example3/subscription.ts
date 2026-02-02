import {applyWhen, email, max, min, minLength, required, schema, validate} from "@angular/forms/signals";

export interface Subscription {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  sendViaText: boolean;
  sendViaEmail: boolean;
  yearsAsFan: number;
}

export const initialData: Subscription = {
  email: '',
  firstName: '',
  lastName: '',
  phone: '',
  sendViaText: true,
  sendViaEmail: true,
  yearsAsFan: NaN
};


/**
 * Newsletter Subscription Validation Schema (Signal Forms)
 *
 * This schema defines all validation rules for the newsletter subscription form
 * using Angular Signal Forms. It demonstrates how to build fully reactive,
 * conditional, and declarative validation logic.
 *
 * Key Features:
 *
 * ✅ Schema-first validation
 *   - Centralizes all business rules outside the component.
 *   - Keeps UI logic clean and focused on presentation.
 *
 * ✅ Conditional required fields
 *   - Email is required only when "Send via Email" is enabled.
 *   - Phone number is required only when "Send via Text" is enabled.
 *   - Uses `when` and `applyWhen` for reactive conditions.
 *
 * ✅ Context-aware validation
 *   - `valueOf()` provides access to live values of other fields.
 *   - Enables cross-field dependencies without manual subscriptions.
 *
 * ✅ Cross-field delivery validation
 *   - Ensures at least one delivery method is selected.
 *   - Uses `validate` with context to compare multiple fields.
 *   - Prevents invalid submissions when no channel is chosen.
 *
 * ✅ User-friendly error messages
 *   - Custom messages guide users clearly.
 *   - Improves UX and accessibility.
 *
 * ✅ Numeric range validation
 *   - `yearsAsFan` is constrained between 0 and 100.
 *   - Prevents invalid or unrealistic input.
 *
 * Validation Rules Summary:
 *
 * - Email:
 *   • Required if `sendViaEmail` is true
 *   • Must be valid format
 *   • Minimum length: 6 characters
 *
 * - Phone:
 *   • Required if `sendViaText` is true
 *   • Minimum length: 10 digits
 *
 * - Send Via:
 *   • At least one option (Email or Text) must be selected
 *   • Enforced using cross-field validation
 *
 * - Years as Fan:
 *   • Must be >= 0
 *   • Must be <= 100
 *
 * Architectural Benefits:
 *
 * - Eliminates imperative validation logic.
 * - Avoids manual event listeners.
 * - Keeps validation fully reactive.
 * - Makes the form easy to scale and maintain.
 *
 * This schema demonstrates how Angular Signal Forms enables complex
 * dynamic and cross-field validation using a clean, declarative approach.
 */


// Define the validation as part of the model
export const subscriptionSchema = schema<Subscription>((rootPath) => {
  required(rootPath.email, {
    message: 'Your email address is required to receive our newsletter',
    when: ({ valueOf }) => valueOf(rootPath.sendViaEmail) === true
  });
  email(rootPath.email, { message: 'Please enter a valid email address' });
  minLength(rootPath.email, 6, { message: 'The email must be at least 6 characters long' });
  applyWhen(
    rootPath.phone,
    ({ valueOf }) => valueOf(rootPath.sendViaText) === true,
    (phonePath) => {
      required(phonePath, { message: 'Your cell phone number is required to receive our newsletter' });
      minLength(phonePath, 10, { message: 'Minimum of 10 digits is required' })
    }
  );

  /**
   * Cross-field validation: Ensure at least one delivery method is selected
   *
   * This validation enforces that the user must choose **Email**, **Text**, or both
   * as a delivery method before submitting the form.
   *
   * It demonstrates how Signal Forms enables declarative, cross-field validation
   * using the `validate` helper and the runtime context object.
   *
   * How it works:
   * - `ctx.value()` retrieves the current field's value (`sendViaText` here).
   * - `ctx.valueOf()` accesses sibling fields (`sendViaEmail`).
   * - Both values are passed to `checkSendVia` for centralized validation logic.
   *
   * Why this approach is powerful:
   * ✅ No manual subscriptions
   * ✅ No imperative form listeners
   * ✅ Fully reactive and schema-driven
   * ✅ Keeps business rules centralized
   *
   * UX Benefit:
   * Prevents users from submitting the form without selecting
   * at least one delivery channel.
   */
  validate(rootPath.sendViaText, (ctx) => {
    const viaText = ctx.value();
    const viaEmail = ctx.valueOf(rootPath.sendViaEmail);
    return checkSendVia(viaText, viaEmail);
  });

  /**
 * Alternative validation on `sendViaEmail` (optional)
 *
 * This commented block shows that the same rule could be attached
 * to `sendViaEmail` instead of `sendViaText`.
 *
 * In practice, attaching it to a single field is sufficient,
 * as long as the validation reads both values.
 */

  // validate(rootPath.sendViaEmail, (ctx) => {
  //   const viaEmail = ctx.value();
  //   const viaText = ctx.valueOf(rootPath.sendViaText);
  //   return checkSendVia(viaText, viaEmail);
  // });
  min(rootPath.yearsAsFan, 0, { message: 'Years cannot be negative' });
  max(rootPath.yearsAsFan, 100, { message: 'Please enter a valid number of years' });
});

/**
 * Shared validation helper for delivery method selection
 *
 * This function centralizes the business rule that at least
 * one delivery method must be selected.
 *
 * @param viaText - Whether "Send via Text" is selected
 * @param viaEmail - Whether "Send via Email" is selected
 * @returns A validation error if neither is selected, otherwise null
 *
 * Design Benefits:
 * ✅ Reusable logic
 * ✅ Easy to test
 * ✅ Keeps schema readable
 * ✅ Avoids duplicated validation code
 */
function checkSendVia(viaText: boolean, viaEmail: boolean) {
  if (viaEmail || viaText) return null;
  return {
    kind: 'sendViaMissing',
    message: 'Must select to send via Email or Text or both'
  };
}


