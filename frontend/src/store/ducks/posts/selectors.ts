import { createSelector } from "reselect";

import {AddPostState, LoadingState, PostsState} from "./contracts/state";
import {RootState} from "../../store";


export const selectPosts = (state: RootState): PostsState => state.posts

export const selectLoadingState = (state: RootState): LoadingState => selectPosts(state).loadingState

export const selectAddPostState = (state: RootState): AddPostState => selectPosts(state).addPostState

export const selectIsPostsLoading = (state: RootState): boolean => selectLoadingState(state) === LoadingState.LOADING

export const selectIsPostsLoaded = (state: RootState): boolean => selectLoadingState(state) === LoadingState.LOADED

export const selectPostsItems = createSelector(selectPosts, posts => posts.items)