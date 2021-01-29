import {
    FetchPostDataActionInterface,
    PostActionsType,
    SetPostDataActionInterface,
    SetPostLoadingStateActionInterface
} from "./actionTypes";
import {LoadingState, PostState} from "../contracts/state";

export const setPostData = (payload: PostState['data']): SetPostDataActionInterface => ({
   type: PostActionsType.SET_POST_DATA,
   payload
});

export const setPostLoadingState = (payload: LoadingState): SetPostLoadingStateActionInterface => ({
    type: PostActionsType.SET_LOADING_STATE,
    payload
});

export const fetchPostData = (payload: string): FetchPostDataActionInterface => ({
    type: PostActionsType.FETCH_POST_DATA,
    payload
});

export type PostActions =
    | SetPostDataActionInterface
    | FetchPostDataActionInterface
    | SetPostLoadingStateActionInterface