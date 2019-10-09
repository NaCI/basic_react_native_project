import {DELETE_USER} from './constant';

export function deleteUser(index, userList) {
    const users = [...userList];
    users.splice(index,1);
    return {
        type: DELETE_USER,
        value: users,
    };
}