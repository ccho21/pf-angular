import { User } from '@app/shared/models/user';
import { Comment } from '@app/shared/models/comment';
import { Like } from './like';
export interface Post {
  postId?       : string;
  title         : string;
  createdAt     : string;
  updatedAt?    : string;
  photoURLs?    : Array<string>;
  author        : User;
  content       : string;
  categoryId    : string;
  tagIds        : string;
  views?        : number;
}

// get comments by post id
