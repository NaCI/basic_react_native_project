import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import listPersonReducer from './src/screens/ListPerson/reducer';

const rootReducer = combineReducers({
    listPerson: listPersonReducer,
});

const configureStore = () => {
    return createStore(
        rootReducer,
        applyMiddleware(thunk)
    );
};

export default configureStore;