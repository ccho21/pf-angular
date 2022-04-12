import { createReducer, on } from '@ngrx/store';

import { User } from '@app/auth/model/user';
import { UserActions } from '../action-types';
export interface UserState {
  user: User | undefined;
}

export const initialUserState: UserState = {
  user: undefined,
};

export const userReducer = createReducer(
  initialUserState,

  on(UserActions.getUser, (state, action) => {
    return {
      user: action.user,
    };
  })
);
