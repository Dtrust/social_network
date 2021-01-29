import {Action} from "redux";
import {AddPostState, LoadingState, Post, PostsState} from "../contracts/state";

export enum PostsActionsType {
    SET_POSTS = 'posts/SET_POSTS',
    FETCH_POSTS = 'posts/FETCH_POSTS',
    SET_LOADING_STATE = 'posts/SET_LOADING_STATE',
    FETCH_ADD_POST = 'posts/FETCH_ADD_POST',
    ADD_POST = 'posts/ADD_POST',
    SET_ADD_POST_STATE = 'posts/SET_ADD_POST_STATE',
}

export interface SetPostsActionInterface extends Action<PostsActionsType> {
    type: PostsActionsType.SET_POSTS;
    payload: PostsState['items'];
}

export interface FetchAddPostActionInterface extends Action<PostsActionsType> {
    type: PostsActionsType.FETCH_ADD_POST;
    payload: string;
}

export interface AddPostActionInterface extends Action<PostsActionsType> {
    type: PostsActionsType.ADD_POST;
    payload: Post;
}

export interface FetchPostsActionInterface extends Action<PostsActionsType> {
    type: PostsActionsType.FETCH_POSTS;
}

export interface SetPostsLoadingStateActionInterface extends Action<PostsActionsType> {
    type: PostsActionsType.SET_LOADING_STATE;
    payload: LoadingState;
}

export interface SetAddPostStateActionInterface extends Action<PostsActionsType> {
    type: PostsActionsType.SET_ADD_POST_STATE;
    payload: AddPostState;
}