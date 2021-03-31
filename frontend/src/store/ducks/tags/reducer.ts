import produce, {Draft} from "immer";

import {TagsState} from "./contracts/state";
import {TagsActions, TagsActionsType} from "./actions/actionCreators";
import { LoadingStatus } from "../../types";

const initialTagsState: TagsState = {
    items: [],
    loadingState: LoadingStatus.NEVER
};

export const tagsReducer = produce((draft: Draft<TagsState>, action: TagsActions) => {
    switch (action.type) {
        case TagsActionsType.SET_TAGS:
            draft.items = action.payload;
            draft.loadingState = LoadingStatus.LOADED;
            break;

        case TagsActionsType.FETCH_TAGS:
            draft.items = [];
            draft.loadingState = LoadingStatus.LOADING;
            break;

        case TagsActionsType.SET_LOADING_STATE:
            draft.loadingState = LoadingStatus.LOADED;
            break;

        default:
            break;
    }

}, initialTagsState)
