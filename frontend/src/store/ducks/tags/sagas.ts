import {call, put, takeLatest } from 'redux-saga/effects'

import { LoadingState } from './contracts/state';
import { TagsApi } from '../../../services/api/tagsApi';
import { setTags, setTagsLoadingState, TagsActionsType } from './actions/actionCreators';

export function* fetchTagsRequests() {
    try {
        const items = yield call(TagsApi.fetchTags)
        yield put(setTags(items))
    } catch (error) {
        yield put(setTagsLoadingState(LoadingState.ERROR))
    }
}

export function* tagsSaga() {
    yield takeLatest(TagsActionsType.FETCH_TAGS, fetchTagsRequests)
}