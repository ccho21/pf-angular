import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { loadAllPosts } from '@app/posts/post.actions';
import { arePostsLoaded } from '@app/posts/posts.selectors';
import { AppState } from '@app/reducers';
import { select, Store } from '@ngrx/store';
import { filter, finalize, first, Observable, of, tap } from 'rxjs';
import { loadUser } from './user.actions';
import { isUserLoaded } from './user.selectors';

@Injectable({
  providedIn: 'root',
})
export class UserResolver implements Resolve<boolean> {
  loading = false;

  constructor(private store: Store<AppState>) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    const userId = route.paramMap.get('id') as string;

    // TODO: add validation logic when userId is not valid
    if (userId) {
      this.loading = false;
    }
    return this.store.pipe(
      select(isUserLoaded),
      tap((userLoaded: any) => {
        console.log('### userLoaded', userLoaded);
        if (!this.loading && !userLoaded) {
          console.log('*****[ USER Resolver ]: LOAD USER');
          this.loading = true;
          this.store.dispatch(loadUser());
        }
      }),
      select(arePostsLoaded),
      tap((postsLoaded) => {
        if (!this.loading && !postsLoaded) {
          console.log('*****[ USER Resolver ]: LOAD ALL POSTS CALLED');
          this.loading = true;
          this.store.dispatch(loadAllPosts());
        }
        console.log(
          '*****[ USER Resolver ]: called',
          this.loading,
          postsLoaded
        );
      }),
      filter((postsLoaded) => postsLoaded),
      first(),
      finalize(() => {
        this.loading = false;
      })
    );
  }
}
