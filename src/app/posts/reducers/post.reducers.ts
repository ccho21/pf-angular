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
    adapter.setAll(action.posts, state)
  )
);

// get properties that are storred in selectors
const { selectAll } = adapter.getSelectors();

// change its name to make this more readable
export const selectAllPosts = selectAll;
