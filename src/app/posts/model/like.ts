import { User } from '@app/auth/model/user';

export interface Like {
  author: User;
  createdAt?: string;
}
