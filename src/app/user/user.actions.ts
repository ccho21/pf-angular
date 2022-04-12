import { createAction, props } from '@ngrx/store';
import { User } from '@app/auth/model/user';

export const getUser = createAction(
  '[User Page] Get User',
  props<{ user: User }>()
);