import {combineReducers} from 'redux';
import authReducer from './auth/authReducer';
import cartReducer from './user/cart/cartReducer';
import generalReducer from './general/general';

const reducer = combineReducers({
    general: generalReducer, 
    auth: authReducer, 
    cart: cartReducer});

export default reducer;