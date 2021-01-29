import produce, {Draft} from "immer";

import {LoadingState, PostState} from "./contracts/state";
import {PostActions} from "./actions/actionCreators";
import { PostActionsType } from "./actions/actionTypes";

const initialPostState: PostState = {
    data: undefined,
    loadingState: LoadingState.NEVER
};

export const postReducer = produce((draft: Draft<PostState>, action: PostActions) => {
    switch (action.type) {
        case PostActionsType.SET_POST_DATA:
            draft.data = action.payload;
            draft.loadingState = LoadingState.LOADED;
            break;

        case PostActionsType.FETCH_POST_DATA:
            draft.data = undefined;
            draft.loadingState = LoadingState.LOADING;
            break;

        case PostActionsType.SET_LOADING_STATE:
            draft.loadingState = LoadingState.LOADED;
            break;

        default:
            break;
    }

}, initialPostState)