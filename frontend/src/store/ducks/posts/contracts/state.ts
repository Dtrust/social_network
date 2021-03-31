import { LoadingStatus } from "../../../types";


export enum AddPostState {
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER'
}

export interface Post {
    _id: string;
    text: string;
    createdAt: string;
    user: {
        avatarurl: string;
        fullname: string;
        username: string;
    };
}

export interface PostsState {
    items: Post[];
    loadingState: LoadingStatus;
    addPostState: AddPostState;
}
