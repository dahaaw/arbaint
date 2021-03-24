import generalType from './general.types';

const initialState = {
    loading: false,
    notif: false
}

const generalReducer = (state = initialState, action) => {
    switch (action.type) {
        case generalType.ADD_NOTIF:
            return {
                ...state,
                notif: action.payload
            }
        case generalType.SET_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case generalType.SHOWED_NOTIF: 
            return {
                ...state,
                notif: false
            }
        default:
            return state;
    }
}

export default generalReducer;