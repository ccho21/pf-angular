import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { tap } from 'rxjs/operators';

import { UserActions } from './action-types';

@Injectable()
export class UserEffects {
  getUser$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UserActions.getUser),
        tap((action) => {
          console.log('[User Effect]', action);
          console.log('this router', this.router);
        })
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, private router: Router) {}
}
