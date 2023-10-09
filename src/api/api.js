import axios from 'axios';

export const loadUsersApi = async ()=> await axios.get('http://localhost:7000/users');

export const createUserApi = async (user)=> await axios.post('http://localhost:7000/users',user);

export const deleteUserApi = async (id)=> await axios.delete(`http://localhost:7000/users/${id}`);

export const updateUserApi = async (id,userInfo)=> await axios.put(`http://localhost:7000/users/${id}`,userInfo);


