import { createStore, combineReducers } from 'redux';
import { countReducer } from './reducers/counter';
import { loginReducer } from './reducers/login';

const store = createStore(combineReducers({
    login: loginReducer
}
),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export { store };