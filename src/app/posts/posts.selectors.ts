import {createFeatureSelector, createSelector} from '@ngrx/store';
import {PostsState} from './reducers/post.reducers';

import * as fromPosts from './reducers/post.reducers';


export const selectPostsState =
    createFeatureSelector<PostsState>("posts");



export const selectAllPosts = createSelector(
    selectPostsState,
    fromPosts.selectAll
);

// export const selectBeginnerPosts = createSelector(
//     selectAllPosts,
//     posts => posts.filter(post => post.category == 'BEGINNER')
// );


export const arePostsLoaded = createSelector(
    selectPostsState,
    state => state.allPostsLoaded
);
