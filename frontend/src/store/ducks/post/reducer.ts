import produce, {Draft} from "immer";

import {PostState} from "./contracts/state";
import {PostActions} from "./actions/actionCreators";
import { PostActionsType } from "./actions/actionTypes";
import { LoadingStatus } from "../../types";

const initialPostState: PostState = {
    data: undefined,
    loadingState: LoadingStatus.NEVER
};

export const postReducer = produce((draft: Draft<PostState>, action: PostActions) => {
    switch (action.type) {
        case PostActionsType.SET_POST_DATA:
            draft.data = action.payload;
            draft.loadingState = LoadingStatus.LOADED;
            break;

        case PostActionsType.FETCH_POST_DATA:
            draft.data = undefined;
            draft.loadingState = LoadingStatus.LOADING;
            break;

        case PostActionsType.SET_LOADING_STATE:
            draft.loadingState = LoadingStatus.LOADED;
            break;

        default:
            break;
    }

}, initialPostState)
