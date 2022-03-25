import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { login, logout } from '@app/auth/auth.actions';
import { isLoggedIn, isLoggedOut } from '@app/auth/auth.selectors';
import { User } from '@app/auth/model/user';
import { AppState } from '@app/reducers';
import { select, Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  loading = true;

  isLoggedIn$: Observable<boolean> | undefined;

  isLoggedOut$: Observable<boolean> | undefined;

  constructor(
    private router: Router,
    private store: Store<AppState>,
    private http: HttpClient
  ) {}

  ngOnInit() {
    // Get token when it is stored in local storage.
    const user = localStorage.getItem('user');

    // if the token is valid, Request a authentication to get the user profile.
    // Store user profile in the state
    if (user) {
      this.http
        .get<User>('/api/auth')
        .pipe(
          tap((res: User) => {
            this.store.dispatch(login({ user: res }));
          })
        )
        .subscribe((val) => {});
    }
    this.router.events.subscribe((event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }
        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loading = false;
          break;
        }
        default: {
          break;
        }
      }
    });
    // check if the user is logged in or not
    this.isLoggedIn$ = this.store.pipe(select(isLoggedIn));
    this.isLoggedOut$ = this.store.pipe(select(isLoggedOut));
  }

  logout() {
    this.store.dispatch(logout());
  }

  onShown(e: any) {}
  onHidden(e: any) {}
}