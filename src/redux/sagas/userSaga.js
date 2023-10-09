import * as types from '../type';
import { take, takeEvery, takeLatest, put, all, delay, fork, call } from 'redux-saga/effects';

import { loadUsersSuccess, loadUsersError } from '../actions/usersAction';
import { createUserSuccess, createUserError } from '../actions/usersAction';
import { deleteUserSuccess, deleteUserError } from '../actions/usersAction';
import { updateUserSuccess, updateUserError } from '../actions/usersAction';
import { loadUsersApi, createUserApi, deleteUserApi,updateUserApi } from '../../api/api';

function* onLoadUsersStartAsync() {
    try {
        const response = yield call(loadUsersApi);
        yield put(loadUsersSuccess(response.data))
    } catch (error) {
        yield put(loadUsersError(error.response.data))
    }
}

function* onCreateUsersStartAsync({ payload }) {
    try {
        const response = yield call(createUserApi, payload);
        if (response.status === 200) {
            yield put(createUserSuccess(response.data))
        }
    } catch (error) {
        yield put(createUserError(error.response.data))
    }
}

function* onDeleteUserStartAsync(userId) {
    try {
        const response = yield call(deleteUserApi, userId);
        if (response.status === 200) {
            yield put(deleteUserSuccess(userId))
        }
    } catch (error) {
        yield put(deleteUserError(error.response.data))
    }
}

function* onUpdateUserStartAsync({payload : {id,user}}){
    try {
        const response = yield call(updateUserApi,id,user);
        if (response.status === 200) {
            yield put(updateUserSuccess())
        }
    } catch (error) {
        yield put(updateUserError(error.response.data))
    }
}

function* onLoadUsers() {
    yield takeEvery(types.LOAD_USERS_START, onLoadUsersStartAsync)
}

function* onCreateUsers() {
    yield takeLatest(types.CREATE_USER_START, onCreateUsersStartAsync)
}

function* onDeleteUser() {
    while (true) {
        const { payload: userId } = yield take(types.DELETE_USER_START);
        yield call(onDeleteUserStartAsync, userId)
    }
}

function* onUpdateUsers() {
    yield takeLatest(types.UPDATE_USER_START, onUpdateUserStartAsync)
}

const userSagas = [fork(onLoadUsers), fork(onCreateUsers), fork(onDeleteUser), fork(onUpdateUsers)];

export default function* rootSaga() {
    yield all([...userSagas])
}