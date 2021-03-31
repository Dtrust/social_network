import {PostState} from "./contracts/state";
import {RootState} from "../../store";
import {Post} from "../posts/contracts/state";
import { LoadingStatus } from "../../types";


export const selectPost = (state: RootState): PostState => state.post

export const selectLoadingState = (state: RootState): LoadingStatus => selectPost(state).loadingState

export const selectIsPostLoading = (state: RootState): boolean => selectLoadingState(state) === LoadingStatus.LOADING

export const selectIsPostLoaded = (state: RootState): boolean => selectLoadingState(state) === LoadingStatus.LOADED

export const selectPostData = (state: RootState): Post | undefined => selectPost(state).data
