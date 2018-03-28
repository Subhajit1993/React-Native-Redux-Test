import {createStore} from 'redux'
import mainReducer from '../reducer/mainReducer';
const store = createStore(mainReducer);
export default store;