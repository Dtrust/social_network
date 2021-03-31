import {AddPostState, PostsState} from "./contracts/state";
import produce, {Draft} from "immer";
import {PostsActions} from "./actions/actionCreators";
import { PostsActionsType } from "./actions/actionTypes";
import { LoadingStatus } from "../../types";

const initialPostsState: PostsState = {
    items: [],
    addPostState: AddPostState.NEVER,
    loadingState: LoadingStatus.NEVER
};

export const postsReducer = produce((draft: Draft<PostsState>, action: PostsActions) => {
    switch (action.type) {
        case PostsActionsType.SET_POSTS:
            draft.items = action.payload;
            draft.loadingState = LoadingStatus.LOADED;
            break;

        case PostsActionsType.FETCH_POSTS:
            draft.items = [];
            draft.loadingState = LoadingStatus.LOADING;
            break;

        case PostsActionsType.SET_LOADING_STATE:
            draft.loadingState = LoadingStatus.LOADED;
            break;

        case PostsActionsType.SET_ADD_POST_STATE:
            draft.addPostState = action.payload;
            break;

        case PostsActionsType.FETCH_ADD_POST:
            draft.addPostState = AddPostState.LOADING;
            break;

        case PostsActionsType.ADD_POST:
            draft.items.splice(0, 0, action.payload)
            draft.addPostState = AddPostState.NEVER
            break;

        default:
            break;
    }

}, initialPostsState)
