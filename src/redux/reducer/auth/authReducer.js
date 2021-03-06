import authType from './auth.type';

const initialStateAuth = {
    showLogin: false,
    showRegister: false,
    logged: false,
    name: ''
}

const authReducer = (state = initialStateAuth, action) => {
    switch (action.type) {
        case authType.SHOW_LOGIN:
            return {
                ...state,
                showLogin: action.payload
            }
        case authType.LOGGED:
            return {
                ...state,
                logged: action.payload
            }
        case authType.LOGGED_IN:
            return {
                ...state,
                logged: false,
                showLogin: false,
                showRegister: false
            }
        case authType.SHOW_REGISTER:
            return {
                ...state,
                showRegister: action.payload
            }
        case authType.REGISTER:
            return {
                ...state,
            }
        
        default:
            return state;
    }

    
}

export default authReducer;