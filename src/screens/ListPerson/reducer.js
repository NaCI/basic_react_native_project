import {DELETE_USER, GET_USER_LIST} from './constant';
import {ADD_USER} from "../AddEditPerson/constant";

const MOCK_DATA = [
  {name: 'Devin', age:34, isMarried:false},
  {name: 'Dan', age:23, isMarried:false},
  {name: 'Dan', age:24, isMarried:true},
  {name: 'Dominic', age:31, isMarried:true},
  {name: 'Jackson', age:32, isMarried:false},
  {name: 'James', age:4, isMarried:false},
  {name: 'Joel', age:15, isMarried:false},
  {name: 'John', age:99, isMarried:true},
  {name: 'Jillian', age:4, isMarried:true},
  {name: 'Jimmy', age:4, isMarried:false},
  {name: 'Julie', age:38, isMarried:false},
];

const initialState = {
  //users: []
  users: MOCK_DATA
};
const listPersonReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_USER:
      return { ...state, users: action.value };
    case ADD_USER:
      return { ...state, users: action.value };
    default:
      return state;
  }
};

export default listPersonReducer;