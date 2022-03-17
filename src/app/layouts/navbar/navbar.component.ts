import {
  Component,
  OnInit,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
} from '@angular/core';
import { Location } from '@angular/common';

import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { User } from '@models/user';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  private toggleButton: any;
  private sidebarVisible: boolean | undefined;
  private colorOnScroll = 500;

  isLoggedIn: boolean | undefined;
  logginSubsctiption: Subscription | undefined;
  navBackgroundColor: boolean | undefined;
  user: User | undefined;


  constructor(private router: Router, public location: Location) {}

  ngOnInit(): void {}

  @HostListener('window:scroll', ['$event'])
  scrollHandler(event: any) {
    const scrollTop = event.target.scrollingElement.scrollTop;
    if (scrollTop > this.colorOnScroll) {
      this.navBackgroundColor = true;
    } else {
      this.navBackgroundColor = false;
    }
  }
  signInOpen() {
    this.router.navigate(['login']);
    // this.logger.info('sign In open?');
    // this.modalService.signInOpen();
  }

  signUpOpen() {
    // this.logger.info('sign up open?');
    // this.modalService.signUpOpen();
    this.router.navigate(['sign-up']);
  }

  signOut() {}
  // Sign In

  // FUNCTIONS
  sidebarOpen() {}

  sidebarClose() {}

  sidebarToggle() {}

  isHome() {}

  isDocumentation() {
    let titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === '#') {
      titlee = titlee.slice(1);
    }
    if (titlee === '/documentation') {
      return true;
    } else {
      return false;
    }
  }
  search() {}
  cancel(event: any) {}
  ngOnDestroy() {
    // this.logginSubsctiption.unsubscribe();
  }
}
