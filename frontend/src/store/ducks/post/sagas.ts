import {call, put, takeLatest } from 'redux-saga/effects'

import { LoadingState } from './contracts/state';
import {setPostData, setPostLoadingState} from './actions/actionCreators';
import { PostsApi } from '../../../services/api/postsApi';
import {FetchPostDataActionInterface, PostActionsType} from './actions/actionTypes';
import { Post } from '../posts/contracts/state';

export function* fetchPostDataRequests({payload: postId}: FetchPostDataActionInterface) {
    try {
        const data: Post[] = yield call(PostsApi.fetchPostData, postId)
        yield put(setPostData(data[0]))
    } catch (error) {
        yield put(setPostLoadingState(LoadingState.ERROR))
    }
}

export function* postSaga() {
    yield takeLatest(PostActionsType.FETCH_POST_DATA, fetchPostDataRequests)
}