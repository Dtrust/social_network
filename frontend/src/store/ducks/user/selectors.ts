import { RootState } from '../../store';
import { UserState } from './contracts/state'
import { LoadingStatus } from "../../types";


export const selectUserState = (state: RootState): UserState => state.user;

export const selectUserData = (state: RootState): UserState['data'] => selectUserState(state).data;

export const selectIsAuth = (state: RootState): boolean => !!selectUserState(state).data;

export const selectUserStatus = (state: RootState): UserState['status'] => selectUserState(state).status;

export const selectUserIsLoading = (state: RootState): boolean => selectUserState(state).status === LoadingStatus.LOADING;
