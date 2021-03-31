import { createSelector } from "reselect";

import {TagsState} from "./contracts/state";
import {RootState} from "../../store";
import { LoadingStatus } from "../../types";


export const selectTags = (state: RootState): TagsState => state.tags

export const selectLoadingState = (state: RootState): LoadingStatus => selectTags(state).loadingState

export const selectIsTagsLoading = (state: RootState): boolean => selectLoadingState(state) === LoadingStatus.LOADING

export const selectIsTagsLoaded = (state: RootState): boolean => selectLoadingState(state) === LoadingStatus.LOADED

export const selectTagsItems = createSelector(selectTags, posts => posts.items)
