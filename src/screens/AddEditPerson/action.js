import {ADD_USER} from './constant';

const initialValue = [];

export function addUser(user, userList = initialValue) {
    const users = [...userList];
    users.push(user);
    return {
        type: ADD_USER,
        value: [...users],
    };
}