import userType from './user.type';

const initialState = {
    profile: ''
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case userType.SET_PROFILE:
            return {
                ...state,
                profile: action.payload
            }
        default:
            return state;
    }
} 

export default userReducer;