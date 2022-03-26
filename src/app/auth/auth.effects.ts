import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Action, Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { from, Observable } from 'rxjs';
import { concatMap, switchMap, tap } from 'rxjs/operators';

import { AuthActions } from './action-types';
import { AuthService } from './auth.service';
import { User } from './model/user';
import { login } from './auth.actions';

@Injectable()
export class AuthEffects {
  login$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.login),
        tap((action) => {
          console.log('[Auth Effect]', action);
          console.log('this router', this.router);
          this.router.navigateByUrl('/posts');
        })
      ),
    { dispatch: false }
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.logout),
        tap((action) => {
          // console.log('LOG OUT EFFECT', action);
          localStorage.removeItem('user');
          this.router.navigateByUrl('/login');
        })
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, private router: Router) {}
}
