import {Component, signal} from '@angular/core';
import {initialData, initialLink, UserProfile, userProfileSchema} from './user-profile';
import {Field,form} from '@angular/forms/signals';
import {MatButton} from '@angular/material/button';
import {RouterLink} from '@angular/router';
import {MatTab, MatTabGroup} from '@angular/material/tabs';
import {MatCard, MatCardContent} from '@angular/material/card';
import {MatIcon} from '@angular/material/icon';
import {MatInput} from '@angular/material/input';
import {MatLabel,MatFormField} from '@angular/material/form-field';

@Component({
  selector: 'app-sf-example6',
  imports: [
    MatButton,
    RouterLink,
    MatTabGroup,
    MatTab,
    MatCardContent,
    Field,
    MatFormField,
    MatIcon,
    MatInput,
    MatLabel,
    MatCard
  ],
  templateUrl: './sf-example6.html',
  styleUrl: './sf-example6.scss',
})
export class SfExample6 {

  // Create a form model signal with form fields
  // This represents the form's data structure
  userProfileModel = signal<UserProfile>(initialData);

  // Declare a form from the model and logic rules schema
  userProfileForm = form(this.userProfileModel, userProfileSchema);

  // Add an empty social media profile link
  addSocialLink() {
    this.userProfileModel.update(profile => ({
      ...profile,
      socialLinks: [...profile.socialLinks, { ...initialLink }]
    }));
  }

  // Delete a social media profile link
  removeSocialLink(index: number) {
    this.userProfileModel.update(profile => ({
      ...profile,
      socialLinks: profile.socialLinks.filter((_, i) => i !== index)
    }));
  }

  onSubmit() {
    if (this.userProfileForm().valid()) {
      console.log('Form submitted:', this.userProfileModel());
      // Handle form submission here
      // Reset form or navigate to another page
    }
  }

  onCancel() {
    // Reset form (or navigate to another page)
    this.userProfileForm().reset(initialData);
  }

}
