import {combineReducers} from 'redux';
import authReducer from './auth/authReducer';
import cartReducer from './user/cart/cartReducer';
import generalReducer from './general/general';
import userReducer from './user/user.reducer';

const reducer = combineReducers({
    general: generalReducer, 
    auth: authReducer, 
    cart: cartReducer,
    user: userReducer
});

export default reducer;