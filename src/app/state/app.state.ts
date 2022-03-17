import { Post } from '@models/post.model';

export interface AppState {
  posts: ReadonlyArray<Post>;
}
