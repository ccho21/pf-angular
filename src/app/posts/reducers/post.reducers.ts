import { Post } from '../model/post';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { PostActions } from '../action-types';

export interface PostsState extends EntityState<Post> {
  selectId: string;
  allPostsLoaded: boolean;
}

// add select Id to use NGRX ENTITY
export const selectUserId = (a: Post): string => {
  return a._id;
};

// Create an entity to manage ids and entity in state
export const adapter = createEntityAdapter<Post>({
  selectId: selectUserId,
});

// Initialize the member of the POST state
export const initialPostsState = adapter.getInitialState({
  allPostsLoaded: false,
});

// Create post reducer
export const postsReducer = createReducer(
  initialPostsState,

  // store data in state when all the posts are loaded.
  on(PostActions.allPostsLoaded, (state, action) => {
    return adapter.setAll(action.posts, { ...state, allPostsLoaded: true });
  })
);

// get properties that are storred in selectors
const { selectAll } = adapter.getSelectors();

// change its name to make this more readable
export const selectAllPosts = selectAll;
