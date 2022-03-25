import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PostActions } from './action-types';
import { concatMap, map } from 'rxjs/operators';
import { allPostsLoaded } from './post.actions';
import { PostService } from '@app/services/post.service';

@Injectable()
export class PostsEffects {
  loadPosts$ = createEffect(() => {
    console.log('[Post Effects]: load posts');
    return this.actions$.pipe(
      ofType(PostActions.loadAllPosts),
      concatMap((action) => this.postService.loadPosts()),
      map((posts) => allPostsLoaded({ posts }))
    );
  });

  constructor(private actions$: Actions, private postService: PostService) {}
}
