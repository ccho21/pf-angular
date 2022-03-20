import { User } from '@app/shared/models/user';
import { Comment } from '@app/shared/models/comment';
import { Like } from '../../shared/models/like';
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
  views        : number;
}


export function comparePosts(p1:Post, p2: Post) {

  const compare = p1.views - p2.views;

  if (compare > 0) {
    return 1;
  }
  else if ( compare < 0) {
    return -1;
  }
  else return 0;

}