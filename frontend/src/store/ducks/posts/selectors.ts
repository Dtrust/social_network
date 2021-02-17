import {AddPostState, LoadingState, PostsState} from "./contracts/state";
import {RootState} from "../../store";


export const selectPostsState = (state: RootState): PostsState => state.posts

export const selectLoadingState = (state: RootState): LoadingState => selectPostsState(state).loadingState

export const selectAddPostState = (state: RootState): AddPostState => selectPostsState(state).addPostState

export const selectIsPostsLoading = (state: RootState): boolean => selectLoadingState(state) === LoadingState.LOADING

export const selectIsPostsLoaded = (state: RootState): boolean => selectLoadingState(state) === LoadingState.LOADED

export const selectPostsItems = (state: RootState) => selectPostsState(state).items;