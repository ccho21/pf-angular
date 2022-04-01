import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostsState } from './reducers/post.reducers';
import * as fromPosts from './reducers/post.reducers';

import { Post } from './model/post';

export const selectPostsState = createFeatureSelector<PostsState>('posts');

export const selectAllPosts = createSelector(
  selectPostsState,
  fromPosts.selectAllPosts
);

export const arePostsLoaded = createSelector(
  selectPostsState,
  (state) => state.allPostsLoaded
);

export const selectPost = (id: string) =>
  createSelector(selectAllPosts, (posts) => {
    const post = posts.find((post) => post._id === id);
    console.log('working??', post);
    return post as Post;
  });
