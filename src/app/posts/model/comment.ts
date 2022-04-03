import { Like } from './like';

export interface Comment {
    _id?: string;
    username?: string;
    thumbnail?: string;
    content: string;
    createdAt?: string;
    updatedAt?: string;
    likes?: Array<Like>;
    author?: string;
    depth?: number;
    postId?: string;
    replyTo?: string;
    commentTag?: string;
    comments?: Array<Comment>;
    parentCommentId?: string;
}
