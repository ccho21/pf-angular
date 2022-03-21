import { comparePosts, Post } from '../model/post';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { PostActions } from '../action-types';

export interface PostsState extends EntityState<Post> {
  allPostsLoaded: boolean;
}

export const adapter = createEntityAdapter<Post>({
  sortComparer: comparePosts,
});

export const initialPostsState = adapter.getInitialState({
  allPostsLoaded: false,
});

export const postsReducer = createReducer(
  initialPostsState,

  on(PostActions.allPostsLoaded, (state, action) =>
    adapter.addMany(action.posts, { ...state, allPostsLoaded: true })
  )

  // on(PostActions.postUpdated, (state, action) =>
  //     adapter.updateOne(action.update, state) )
);

export const { selectAll } = adapter.getSelectors();
