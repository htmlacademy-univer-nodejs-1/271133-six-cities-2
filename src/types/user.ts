export enum UserType {
    simple,
    pro
}

export type User = {
    name: string;
    email: string;
    avatar?: string;
    password: string;
    type: UserType;
}

