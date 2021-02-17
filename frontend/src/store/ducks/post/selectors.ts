import {LoadingState, PostState} from "./contracts/state";
import {RootState} from "../../store";
import {Post} from "../posts/contracts/state";


export const selectPost = (state: RootState): PostState => state.post

export const selectLoadingState = (state: RootState): LoadingState => selectPost(state).loadingState

export const selectIsPostLoading = (state: RootState): boolean => selectLoadingState(state) === LoadingState.LOADING

export const selectIsPostLoaded = (state: RootState): boolean => selectLoadingState(state) === LoadingState.LOADED

export const selectPostData = (state: RootState): Post | undefined => selectPost(state).data