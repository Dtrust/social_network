import produce, {Draft} from "immer";

import { LoadingStatus } from "../../types";
import { WhosReadState } from "./contracts/state";
import { WhosReadActions, WhosReadActionsType } from "./actions/actionCreators";


const initialWhosReadState: WhosReadState = {
    items: [],
    loadingState: LoadingStatus.NEVER
};

export const whosReadReducer = produce((draft: Draft<WhosReadState>, action: WhosReadActions) => {
    switch (action.type) {
        case WhosReadActionsType.SET_ITEMS:
            draft.items = action.payload;
            draft.loadingState = LoadingStatus.LOADED;
            break;

        case WhosReadActionsType.FETCH_ITEMS:
            draft.loadingState = LoadingStatus.LOADING;
            break;

        default:
            break;
    }

}, initialWhosReadState)
