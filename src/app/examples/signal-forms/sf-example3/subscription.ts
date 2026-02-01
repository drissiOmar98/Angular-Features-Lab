import { applyWhen, email, max, min, minLength, required, schema } from "@angular/forms/signals";

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
 * dynamic validation using a clean, declarative approach.
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
  min(rootPath.yearsAsFan, 0, { message: 'Years cannot be negative' });
  max(rootPath.yearsAsFan, 100, { message: 'Please enter a valid number of years' });
});
