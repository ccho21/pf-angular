import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { from, Observable } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { AuthActions } from './action-types';

@Injectable()
export class AuthEffects {
  login$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.login),
        tap((action) =>
          localStorage.setItem('user', JSON.stringify(action.user))
        )
      ),
    { dispatch: false }
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.logout),
        tap((action) => {
          localStorage.removeItem('user');
          this.router.navigateByUrl('/login');
        })
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, private router: Router) {}
}
