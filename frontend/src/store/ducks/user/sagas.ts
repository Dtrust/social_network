import { call, put, takeLatest } from 'redux-saga/effects'

import { AuthApi } from '../../../services/api/authApi';
import { FetchSignInActionInterface, UserActionsType } from "./actions/actionTypes";
import { setUserData, setUserLoadingStatus } from "./actions/actionCreators";
import { LoadingStatus } from '../../types';


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
    yield takeLatest(UserActionsType.FETCH_SIGN_IN, fetchSignInRequests);
}
