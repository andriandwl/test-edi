import axios from "axios";

const url = "http://127.0.0.1:5005/user";

export const fetchUsers = () => axios.get(url);
export const addUsers = (user) => axios.post(url, user);
export const deleteUsers = (id) => axios.delete(`${url}/${id}`);
export const getUsersById = (id) => axios.get(`${url}/${id}`);
