import {createAction, props} from '@ngrx/store';
import {Post} from './model/post';
import {Update} from '@ngrx/entity';
import {UpdateStr} from '@ngrx/entity/src/models';


export const loadAllPosts = createAction(
    "[Posts Resolver] Load All Posts"
);


export const allPostsLoaded = createAction(
    "[Load Posts Effect] All Posts Loaded",
    props<{posts: Post[]}>()
);


export const postUpdated = createAction(
  "[Edit Post Dialog] Post Updated",
  props<{update: Update<Post>}>()
);

