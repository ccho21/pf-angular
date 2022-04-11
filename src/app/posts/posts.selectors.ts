import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostsState } from './reducers/post.reducers';
import * as fromPosts from './reducers/post.reducers';

import { Post } from './model/post';

export const selectPostsState = createFeatureSelector<PostsState>('posts');

export const selectAllPosts = createSelector(
  selectPostsState,
  fromPosts.selectAllPosts
);

export const selectPostsByUserId = (id: string) => {
  console.log(id);
  console.log('### select post state', selectPostsState);
  console.log('### From posts select ALL posts', fromPosts.selectAllPosts);
  return createSelector(selectPostsState, fromPosts.selectAllPosts);
};

export const arePostsLoaded = createSelector(
  selectPostsState,
  (state) => state.allPostsLoaded
);

export const selectPost = (id: string) =>
  createSelector(selectAllPosts, (posts) => {
    const post = posts.find((post) => post._id === id);
    return post as Post;
  });
