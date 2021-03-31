import { LoadingStatus } from "../../../types";
import {AddPostState, Post, PostsState} from "../contracts/state";
import {
    AddPostActionInterface,
    FetchAddPostActionInterface,
    FetchPostsActionInterface,
    PostsActionsType,
    SetAddPostStateActionInterface,
    SetPostsActionInterface,
    SetPostsLoadingStateActionInterface
} from "./actionTypes";

export const setPosts = (payload: PostsState['items']): SetPostsActionInterface => ({
    type: PostsActionsType.SET_POSTS,
    payload
});

export const fetchAddPost = (payload: string): FetchAddPostActionInterface => ({
    type: PostsActionsType.FETCH_ADD_POST,
    payload
});

export const addPost = (payload: Post): AddPostActionInterface => ({
    type: PostsActionsType.ADD_POST,
    payload
});

export const setPostsLoadingState = (payload: LoadingStatus): SetPostsLoadingStateActionInterface => ({
    type: PostsActionsType.SET_LOADING_STATE,
    payload
});

export const setAddPostState = (payload: AddPostState): SetAddPostStateActionInterface => ({
    type: PostsActionsType.SET_ADD_POST_STATE,
    payload
});

export const fetchPosts = (): FetchPostsActionInterface => ({
    type: PostsActionsType.FETCH_POSTS
});

export type PostsActions =
    | SetPostsActionInterface
    | FetchPostsActionInterface
    | SetPostsLoadingStateActionInterface
    | FetchAddPostActionInterface
    | AddPostActionInterface
    | SetAddPostStateActionInterface;
