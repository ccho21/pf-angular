import {createAction, props} from '@ngrx/store';
import {Post} from './model/post';
import {Update} from '@ngrx/entity';


export const loadAllPosts = createAction(
    "[Posts Resolver] Load All Posts"
);


export const allPostsLoaded = createAction(
    "[Load Posts Effect] All Posts Loaded",
    props<{posts: Post[]}>()
);

export const homeScore = createAction('[Scoreboard Page] Home Score');