import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  navOpen = false;

  openNav() {
    this.navOpen = true;
    setTimeout(() => {
      const firstLink = document.querySelector('.nav-links a');
      if (firstLink) (firstLink as HTMLElement).focus();
    }, 100);
    document.body.style.overflow = 'hidden';
  }

  closeNav() {
    this.navOpen = false;
    document.body.style.overflow = '';
  }

  onKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape' && this.navOpen) {
      this.closeNav();
    }
  }

}
