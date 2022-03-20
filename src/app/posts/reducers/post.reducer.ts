import { comparePosts, Post } from '../model/post';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { PostActions } from '../action-types';

export interface PostsState {
  allPostsLoaded: boolean;
  Posts: Post[]
}

export const initialPostsState = {
  allPostsLoaded: false,
  posts: ["HOHOHO"]
};

export const postsReducer = createReducer(initialPostsState);
