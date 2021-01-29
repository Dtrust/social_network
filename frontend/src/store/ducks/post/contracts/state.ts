import { Post } from "../../posts/contracts/state";

export enum LoadingState {
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER'

}

export interface PostState {
    data?: Post;
    loadingState: LoadingState
}