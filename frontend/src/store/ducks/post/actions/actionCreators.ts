import { LoadingStatus } from "../../../types";
import {
    FetchPostDataActionInterface,
    PostActionsType,
    SetPostDataActionInterface,
    SetPostLoadingStateActionInterface
} from "./actionTypes";
import {PostState} from "../contracts/state";

export const setPostData = (payload: PostState['data']): SetPostDataActionInterface => ({
    type: PostActionsType.SET_POST_DATA,
    payload
});

export const setPostLoadingState = (payload: LoadingStatus): SetPostLoadingStateActionInterface => ({
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
