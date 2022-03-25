import { UserActivities } from '@app/shared/models/user-activities';

export interface User {
    id           : string;
    email         : string;
    displayName   : string;
    photoURL      : string;
    emailVerified : boolean;
    activities?   : UserActivities;
    userName?      : string;
}
