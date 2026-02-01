import {Component, effect, signal} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {MatTab, MatTabGroup} from '@angular/material/tabs';
import {RouterLink} from '@angular/router';
import {MatCard, MatCardContent} from '@angular/material/card';
import {MatError, MatFormField, MatLabel, MatSuffix} from '@angular/material/form-field';
import {MatIcon} from '@angular/material/icon';
import {MatInput} from '@angular/material/input';
import {MatCheckbox} from '@angular/material/checkbox';
import {initialData, Subscription, subscriptionSchema} from './subscription';
import {Field, form} from '@angular/forms/signals';

/**
 * Signal Forms Example 3 – Newsletter Subscription Form
 *
 * This Angular standalone component demonstrates a fully reactive, schema-driven
 * newsletter subscription form using Angular Signal Forms (experimental API).
 *
 * Features:
 * ✅ Reactive form model using writable signals (`subscribeModel`).
 * ✅ Schema-driven validation (`subscriptionSchema`) for email, phone, and years as fan.
 * ✅ Conditional validation and visibility based on other fields:
 *    - Email required only if "Send via Email" is checked.
 *    - Phone required only if "Send via Text" is checked.
 * ✅ Real-time reactive UI updates with Angular signals:
 *    - Form fields automatically reflect validation state.
 *    - Errors displayed inline via `<mat-error>` using field signals.
 * ✅ Effector example (`eff`) to log form changes:
 *    - Demonstrates how effects can react to changes in writable signals.
 *
 * Notes:
 * - The component uses Angular Material for modern UI elements.
 * - Combines `MatFormField`, `MatInput`, `MatCheckbox`, `MatIcon`, and other Material modules
 *   with signal-based form fields for a clean, declarative approach.
 * - The form is fully declarative, eliminating manual subscriptions or imperative event handling.
 *
 * Recommended usage:
 * - Ideal for dynamic subscription forms where fields and validation rules depend on user choices.
 * - Provides a template for building larger signal-driven forms with conditional logic.
 */
@Component({
  selector: 'app-sf-example3',
  imports: [
    MatButton,
    MatTabGroup,
    RouterLink,
    MatTab,
    MatCard,
    MatCardContent,
    MatLabel,
    MatFormField,
    MatIcon,
    Field,
    MatInput,
    MatCheckbox,
    MatSuffix,
    MatError
  ],
  templateUrl: './sf-example3.html',
  styleUrl: './sf-example3.scss',
})
export class SfExample3 {

  // Create a form model signal with form fields
  // This represents the form's data structure
  subscribeModel = signal<Subscription>(initialData);

  // Declare a form from the model and logic rules schema
  subscribeForm = form(this.subscribeModel, subscriptionSchema);

  eff = effect(() =>
    console.log('Email:', this.subscribeModel().email));

}
