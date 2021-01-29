import {call, put, takeLatest } from 'redux-saga/effects'

import { PostsApi } from "../../../services/api/postsApi";
import {
    addPost,
    setAddPostState,
    setPosts,
    setPostsLoadingState
} from "./actions/actionCreators";
import { FetchAddPostActionInterface, PostsActionsType } from './actions/actionTypes';
import {AddPostState, LoadingState, Post } from './contracts/state';

export function* fetchPostsRequests() {
    try {
        const items = yield call(PostsApi.fetchPosts);
        yield put(setPosts(items));
    } catch (error) {
        yield put(setPostsLoadingState(LoadingState.ERROR));
    }
}

export function* fetchAddPostRequests({payload}: FetchAddPostActionInterface) {
    try {
        const data: Post = {
            _id: Math.random().toString(36).substring(2),
            text: payload,
            user: {
                fullName: 'Test User',
                userName: 'test',
                avatarUrl: 'https://source.unsplash.com/random/100x100?7'
            },
        };
        const item = yield call(PostsApi.addPost, data);
        yield put(addPost(item));
    } catch (error) {
        yield put(setAddPostState(AddPostState.ERROR));
    }
}

export function* postsSaga() {
    yield takeLatest(PostsActionsType.FETCH_POSTS, fetchPostsRequests);
    yield takeLatest(PostsActionsType.FETCH_ADD_POST, fetchAddPostRequests);
}