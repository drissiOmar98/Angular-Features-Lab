import {RegisterFormModel} from './sf-example2';
import {customError, email, hidden, required, schema, validate, validateTree} from '@angular/forms/signals';

/**
 * Registration Form Schema for Signal Forms
 *
 * This schema defines validation and visibility rules for a user registration form
 * using Angular Signal Forms. It demonstrates advanced patterns including:
 *
 * ✅ Schema-first separation of concerns:
 *    - Business rules (validation, conditional logic) are centralized here,
 *      keeping the component strictly focused on UI state.
 *
 * ⚡ Field-level validation:
 *    - `email(field.email)` ensures proper email format.
 *    - `required(field.email)` enforces that the email field must be filled.
 *
 * 🔄 Multi-field validation using `validateTree`:
 *    - Validates password and confirmPassword together.
 *    - Returns custom errors for both fields if passwords mismatch.
 *    - Eliminates manual error syncing and boilerplate logic.
 *
 * 👁️ Conditional visibility with `hidden`:
 *    - The `state` field is only visible if the `country` is 'US'.
 *    - Hidden fields do not affect parent form validity.
 *    - Simplifies template logic, replacing redundant *ngIf checks.
 *
 * 💡 Notes on commented sections:
 *    - `validate` for single-field password match is an alternative approach,
 *      replaced here by `validateTree` for multi-field validation.
 *    - Conditional required logic using `when` is replaced by `hidden`
 *      + always-required pattern for clarity and reactive state handling.
 */
export const registerFormSchema = schema<RegisterFormModel>((field) => {
  // Email field validations
  email(field.email);            // Ensures email format
  required(field.email);         // Makes email mandatory

  /**
   * Single-field validation for confirmPassword (commented out)
   *
   * This block demonstrates an alternative approach to password confirmation validation
   * using the `validate` function on a single field.
   *
   * Key points:
   * ⚡ Targets only the `confirmPassword` field individually.
   * 🔄 Accesses the current value of the password field via `ctx.valueOf(field.password)`.
   * ❌ Returns a `customError` if the password and confirmPassword values do not match.
   * ✅ Provides immediate, field-level error feedback.
   *
   * Note:
   * This approach was replaced by `validateTree` to handle multi-field validation,
   * which allows setting errors on both `password` and `confirmPassword` simultaneously.
   * Using `validateTree` improves UX and reduces boilerplate, keeping the form reactive
   * and synchronized across related fields.
   */
  /*
    /* validate(
       field.confirmPassword, (ctx) => {
         const password = ctx.valueOf(field.password);
         const confirmPassword = ctx.value();

         return password === confirmPassword
           ? undefined
           : customError({
             message: 'Passwords do not match',
             kind: 'passwordMismatch',
           });
       }
     );
   */

  // Multi-field password validation
  validateTree(field, (ctx) => {
    const password = ctx.valueOf(field.password);
    const confirmPassword = ctx.valueOf(field.confirmPassword);
    return password === confirmPassword
      ? undefined
      : [
        customError({
          field: ctx.fieldTreeOf(field.password),
          kind: 'PasswordMismatch',
          message: 'Passwords do not match',
        })
        , customError({
          field: ctx.fieldTreeOf(field.confirmPassword),
          kind: 'PasswordMismatch',
          message: 'Passwords do not match',

        })
      ]
  });

   // Country is always required
  required(field.country);


  /**
   * Conditional required validation for the state field (commented out)
   *
   * This block shows an alternative approach to making the `state` field required
   * only when the selected `country` is 'US', using the `when` property.
   *
   * Key points:
   * ⚡ Conditional requirement based on another field's value (`country`).
   * 🔄 Accesses the current value of `country` via `ctx.valueOf(field.country)`.
   * ✅ Ensures that `state` is required only for US users.
   *
   * Note:
   * This approach was replaced by using `hidden(field.state, ...)` combined with
   * an always-required rule. The `hidden` helper improves reactive UX by:
   * - Managing both visibility and validation in a single source of truth.
   * - Automatically ignoring hidden fields in validation.
   * - Simplifying template logic with reactive signals instead of @if conditions.
   */
  /*
  /* required(field.state, {
     when: (ctx) => {
       const country = ctx.valueOf(field.country);
       return country === 'US';
     }
   });*/

  // State is required but only relevant when country is 'US'
  required(field.state);
  hidden(field.state, (ctx) => {
    return ctx.valueOf(field.country) !== 'US';
  });



});
