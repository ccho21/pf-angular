import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PostActions } from './action-types';
import { concatMap, map } from 'rxjs/operators';
import { allPostsLoaded } from './post.actions';

@Injectable()
export class PostsEffects {
  loadPosts$ = createEffect(() =>
    this.actions$.pipe(ofType(PostActions.loadAllPosts))
  );

  savePost$ = createEffect(
    () => this.actions$.pipe(ofType(PostActions.postUpdated)),
    { dispatch: false }
  );

  constructor(private actions$: Actions) {}
}
