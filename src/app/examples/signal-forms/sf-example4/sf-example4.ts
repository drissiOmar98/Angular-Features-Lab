import {Component, effect, signal} from '@angular/core';
import {initialUserData, User, userSchema} from './hobby';
import {Field, form} from '@angular/forms/signals';
import {JsonPipe} from '@angular/common';
import {MatCard, MatCardContent} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {MatTab, MatTabGroup} from '@angular/material/tabs';
import {RouterLink} from '@angular/router';


@Component({
  selector: 'app-sf-example4',
  imports: [
    JsonPipe,
    MatCardContent,
    MatCard,
    MatButton,
    Field,
    MatTabGroup,
    RouterLink,
    MatTab
  ],
  templateUrl: './sf-example4.html',
  styleUrl: './sf-example4.scss',
})
export class SfExample4 {

   // initial state
  user = signal<User>(initialUserData);

  // create ONE form
  userForm= form(this.user, userSchema);

  addHobby() {
    this.user.update(u => ({
      ...u,
      hobbies: [...u.hobbies, { id: u.hobbies.length + 1, name: '' }]
    }));
  }

  removeHobby(index: number) {
    const currentUser = this.user();
    this.user.set({
      ...currentUser,
      hobbies: currentUser.hobbies.filter((_, i) => i !== index)
    });
  }

  public errors = effect(() => {
    return this.userForm().errors();
  });

  onSubmit() {
    if (this.userForm().valid()) {
      alert('Signup successful!');
    }
  }

}
