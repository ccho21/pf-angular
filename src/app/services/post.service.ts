import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { Post } from '@posts/model/post';
import { concatMap, map, tap } from 'rxjs/operators';
import { convertSnaps } from './db-utils';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private store: Store) {}
  // loadPosts(): Observable<Post[]> {
  //   console.log('[POST service]:  get collection');
  // }

  // addHomeScore() {
  //   this.store.dispatch(homeScore());
  // }
}
