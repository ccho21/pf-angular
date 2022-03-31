// import { User } from '@app/shared/models/user';
import { Comment } from './comment';
// import { Like } from '../../shared/models/like';
export interface Post {
  _id: string;
  // author?: User;
  author: string;
  thumbnail: string;
  content: string;
  username: string;
  images: Array<string>;
  likes?: Array<string>;
  comments?: Array<Comment>;
  createdAt?: string;
  updatedAt?: string;
}
