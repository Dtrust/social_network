import {AddPostState, PostsState} from "./contracts/state";
import {RootState} from "../../store";
import { LoadingStatus } from "../../types";


export const selectPostsState = (state: RootState): PostsState => state.posts

export const selectLoadingState = (state: RootState): LoadingStatus => selectPostsState(state).loadingState

export const selectAddPostState = (state: RootState): AddPostState => selectPostsState(state).addPostState

export const selectIsPostsLoading = (state: RootState): boolean => selectLoadingState(state) === LoadingStatus.LOADING

export const selectIsPostsLoaded = (state: RootState): boolean => selectLoadingState(state) === LoadingStatus.LOADED

export const selectPostsItems = (state: RootState) => selectPostsState(state).items;
