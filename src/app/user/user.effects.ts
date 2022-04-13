import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap, map, tap } from 'rxjs/operators';

import { UserActions } from './action-types';
import { UserService } from './user.service';

@Injectable()
export class UserEffects {
  loadUser$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UserActions.userLoaded),
        concatMap((action) => {
          console.log('[User Effect]', action);
          // console.log('this router', this.router);
          return this.userService.getUserById('string');
        }),
        map((user) => {
          return user;
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private router: Router,
    private userService: UserService
  ) {}
}
