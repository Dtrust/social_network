export enum LoadingState {
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER'
}

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
    loadingState: LoadingState;
    addPostState: AddPostState;
}