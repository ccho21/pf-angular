import { User } from './user';

export interface Like {
    likeId?: string;
    type: number; // enum value 1: post, 2: comment
    user: User;
    createdAt: string;
    commentId?: string;
    subCommentId?: string;
    pCommentId?: string;
    postId?: string;
}
