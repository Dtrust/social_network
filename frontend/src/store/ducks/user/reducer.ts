import produce, { Draft } from "immer";

import { UserActions } from "./actions/actionCreators";
import { UserActionsType } from "./actions/actionTypes";
import { LoadingStatus } from "../../types";
import { UserState } from "./contracts/state";


const initialUserState: UserState = {
    data: undefined,
    status: LoadingStatus.NEVER
};

export const userReducer = produce((draft: Draft<UserState>, action: UserActions) => {
    switch (action.type) {
        case UserActionsType.SET_USER_DATA:
            draft.data = action.payload;
            draft.status = LoadingStatus.SUCCESS;
            break;

        case UserActionsType.SET_LOADING_STATE:
            draft.status = action.payload;
            break;

        default:
            break;
    }

}, initialUserState)
