import {Action} from "redux";

import {LoadingState, PostState} from "../contracts/state";


export enum PostActionsType {
    SET_POST_DATA = 'post/SET_POST_DATA',
    FETCH_POST_DATA = 'post/FETCH_POST_DATA',
    SET_LOADING_STATE = 'post/SET_LOADING_STATE'
}

export interface SetPostDataActionInterface extends Action<PostActionsType> {
    type: PostActionsType.SET_POST_DATA;
    payload: PostState['data']
}

export interface FetchPostDataActionInterface extends Action<PostActionsType> {
    type: PostActionsType.FETCH_POST_DATA;
    payload: string
}

export interface SetPostLoadingStateActionInterface extends Action<PostActionsType> {
    type: PostActionsType.SET_LOADING_STATE;
    payload: LoadingState
}