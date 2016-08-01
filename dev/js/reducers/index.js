import {combineReducers} from "redux";
import image from './reducer-image';
import values from './reducer-values';

const allReducers = combineReducers({
    image,
    values
})

export default allReducers;