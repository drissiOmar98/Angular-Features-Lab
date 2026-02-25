import {applyEach, required, schema} from '@angular/forms/signals';

export interface Hobby {
  id?: number;
  name: string;
}

export interface User {
  name: string;
  email: string;
  hobbies: Hobby[];
}

export const initialUserData: User = {
  name: '',
  email: '',
  hobbies: []
};


export const userSchema = schema<User>((f) => {
  required(f.name, { message: 'Name is required' });
  required(f.email, { message: 'Email is required' });

  applyEach(f.hobbies, (hobby) => {
    required(hobby.name, { message: 'Hobby name is required' });
  });

});
