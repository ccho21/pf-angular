// import { User } from '@app/shared/models/user';
import { Comment } from './comment';
import { Like } from './like';
export interface Post {
  _id?: string;
  author?: string;
  thumbnail?: string;
  content: string;
  username?: string;
  images: Array<string>;
  likes?: Array<Like>;
  comments?: Array<Comment>;
  createdAt?: string;
  updatedAt?: string;
}
