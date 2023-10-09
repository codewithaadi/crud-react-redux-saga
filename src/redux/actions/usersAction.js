import * as types from '../type';

export const loadUsersStart = ()=>({
    type: types.LOAD_USERS_START,
});

export const loadUsersSuccess = (users)=>({
    type: types.LOAD_USERS_SUCCESS,
    payload: users,
});

export const loadUsersError = (error)=>({
    type: types.LOAD_USERS_ERROR,
    payload: error,
});

export const createUserStart = (users)=>({
    type: types.CREATE_USER_START,
    payload: users,
});

export const createUserSuccess = ()=>({
    type: types.CREATE_USER_SUCCESS,
});

export const createUserError = (error)=>({
    type: types.CREATE_USER_ERROR,
    payload: error,
});

export const deleteUserStart = (id)=>({
    type: types.DELETE_USER_START,
    payload: id,
})

export const deleteUserSuccess = (id)=>({
    type: types.DELETE_USER_SUCCESS,
    payload: id,
})

export const deleteUserError = (error)=>({
    type: types.DELETE_USER_ERROR,
    payload: error,
})

export const updateUserStart = (userInfo)=>({ //userInfo will be an object that will consist two parameters , that is the id and second is the update details of the user
    type: types.UPDATE_USER_START,
    payload: userInfo,
})

export const updateUserSuccess = ()=>({
    type: types.UPDATE_USER_SUCCESS,
})

export const updateUserError = (error)=>({
    type: types.UPDATE_USER_ERROR,
    payload: error,
})

