import {combineReducers} from 'redux';
import count from './counterReducer'
import pageStatus from './pageViewControlReducer'
const mainReducer  = combineReducers({
    count,
    pageStatus
    //Other Reducer
});

export default mainReducer;