import authType from './auth.type';

const initialStateAuth = {
    showLogin: false,
    showRegister: false
}

const authReducer = (state = initialStateAuth, action) => {
    switch (action.type) {
        case authType.SHOW_LOGIN:
            return {
                ...state,
                showLogin: action.payload
            }
        case authType.SHOW_REGISTER:
            return {
                ...state,
                showRegister: action.payload
            }
        default:
            return state;
    }

    
}

export default authReducer;