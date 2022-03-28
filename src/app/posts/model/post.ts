// import { User } from '@app/shared/models/user';
// import { Comment } from '@app/shared/models/comment';
// import { Like } from '../../shared/models/like';
export interface Post {
  _id: string;
  // author?: User;
  author?: string;
  content: string;
  username: string;
  images: Array<string>;
  avatar: string;
  likes?: Array<string>;
  comments?: Array<string>;
  createdAt?: string;
  updatedAt?: string;
}
