import { call, put, takeLatest } from 'redux-saga/effects'

import { AuthApi } from '../../../services/api/authApi';
import { FetchSignInActionInterface, FetchSignUpActionInterface, UserActionsType } from "./actions/actionTypes";
import { setUserData, setUserLoadingStatus } from "./actions/actionCreators";
import { LoadingStatus } from '../../types';


export function* fetchSignUpRequests({ payload }: FetchSignUpActionInterface) {
    try {
        yield put(setUserLoadingStatus(LoadingStatus.LOADING));
        yield call(AuthApi.signUp, payload);
        yield put(setUserLoadingStatus(LoadingStatus.SUCCESS));
    } catch (error) {
        yield put(setUserLoadingStatus(LoadingStatus.ERROR));
    }
}

export function* fetchSignInRequests({ payload }: FetchSignInActionInterface) {
    try {
        const { data } = yield call(AuthApi.signIn, payload);
        yield put(setUserData(data));
        window.localStorage.setItem('token', data.token);
    } catch (error) {
        yield put(setUserLoadingStatus(LoadingStatus.ERROR));
    }
}

export function* userSaga() {
    yield takeLatest(UserActionsType.FETCH_SIGN_UP, fetchSignUpRequests);
    yield takeLatest(UserActionsType.FETCH_SIGN_IN, fetchSignInRequests);
}
