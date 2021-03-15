import {combineReducers} from 'redux';
import authReducer from './auth/authReducer';
import cartReducer from './user/cart/cartReducer';

const reducer = combineReducers({authReducer, cartReducer});

export default reducer;