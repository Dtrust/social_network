import {call, put, takeLatest } from 'redux-saga/effects'

import { PostsApi } from "../../../services/api/postsApi";
import {
    addPost,
    setAddPostState,
    setPosts,
    setPostsLoadingState
} from "./actions/actionCreators";
import {FetchAddPostActionInterface, PostsActionsType} from './actions/actionTypes';
import {AddPostState, LoadingState} from './contracts/state';


export function* fetchPostsRequests() {
    try {
        const items = yield call(PostsApi.fetchPosts);
        yield put(setPosts(items));
    } catch (error) {
        yield put(setPostsLoadingState(LoadingState.ERROR));
    }
}

export function* fetchAddPostRequests({payload: text}: FetchAddPostActionInterface) {
    try {
        const item = yield call(PostsApi.addPost, text);
        yield put(addPost(item));
    } catch (error) {
        yield put(setAddPostState(AddPostState.ERROR));
    }
}

export function* postsSaga() {
    yield takeLatest(PostsActionsType.FETCH_POSTS, fetchPostsRequests);
    yield takeLatest(PostsActionsType.FETCH_ADD_POST, fetchAddPostRequests);
}