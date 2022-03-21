import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AppState } from '../reducers';
import { select, Store } from '@ngrx/store';
import { filter, finalize, first, tap } from 'rxjs/operators';
import { loadAllPosts } from './post.actions';
import { arePostsLoaded } from './posts.selectors';

@Injectable()
export class PostsResolver implements Resolve<any> {
  loading = false;

  constructor(private store: Store<AppState>) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    console.log('##### route #####', route);
    console.log('##### state #####', state);
    return this.store.pipe(
      select(arePostsLoaded),
      tap((postsLoaded) => {
        console.log('TAP Posts are loaded', postsLoaded);
        if (!this.loading && !postsLoaded) {
          console.log('**[POST Resolver]: LOADED IN RESOLVER', postsLoaded);
          this.loading = true;
          this.store.dispatch(loadAllPosts());
        }
      }),
      filter((postsLoaded) => postsLoaded),
      first(),
      finalize(() => (this.loading = false))
    );
  }
}
