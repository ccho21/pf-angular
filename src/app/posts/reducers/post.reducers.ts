import { comparePosts, Post } from '../model/post';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { PostActions } from '../action-types';

export interface PostsState extends EntityState<Post> {
  allPostsLoaded: boolean;
}

export const adapter = createEntityAdapter<Post>();

export const initialPostsState = adapter.getInitialState({
  allPostsLoaded: false,
  home: 0,
});

export const postsReducer = createReducer(
  initialPostsState,

  on(PostActions.allPostsLoaded, (state, action) => {
    console.log('[### POST REDUCER] : ');
    return adapter.setAll(action.posts, { ...state, allPostsLoaded: true });
  }),
  
  on(PostActions.homeScore, (state) => ({
    ...state,
    home: state.home + 1,
  }))
);

// get properties that are storred in selectors
const { selectAll } = adapter.getSelectors();

// change its name to make this more readable
export const selectAllPosts = selectAll;
