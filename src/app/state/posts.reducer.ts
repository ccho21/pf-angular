import { createReducer, on } from '@ngrx/store';
import { getPosts } from './posts.actions';
import { Post } from '@models/post.model';

export const initialState: any = {};

const _postsReducer = createReducer(
  initialState,
  on(getPosts, (state) => state.posts)
);

export function postsReducer(state: any, action: any) {
  return _postsReducer(state, action);
}
