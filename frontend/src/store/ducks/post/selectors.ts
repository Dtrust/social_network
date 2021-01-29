import {LoadingState, PostState} from "./contracts/state";
import {RootState} from "../../store";


export const selectPost = (state: RootState): PostState => state.post

export const selectLoadingState = (state: RootState): LoadingState => selectPost(state).loadingState

export const selectIsPostLoading = (state: RootState): boolean => selectLoadingState(state) === LoadingState.LOADING

export const selectIsPostLoaded = (state: RootState): boolean => selectLoadingState(state) === LoadingState.LOADED

export const selectPostData = (state: RootState): PostState['data'] => selectPost(state).data