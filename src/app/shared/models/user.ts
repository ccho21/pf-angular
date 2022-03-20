import { Post } from '@app/posts/model/post';
import { Comment } from '@app/shared/models/comment';
import { UserActivities } from '@app/shared/models/user-activities';

export interface User {
    uid           : string;
    email         : string;
    displayName   : string;
    photoURL      : string;
    emailVerified : boolean;
    activities?   : UserActivities;
    userName?      : string;
}
