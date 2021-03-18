import generalType from './general.types';

const initialState = {
    notif: false
}

const generalReducer = (state = initialState, action) => {
    switch (action.type) {
        case generalType.ADD_NOTIF:
            return {
                ...state,
                notif: action.payload
            }
        default:
            return state;
    }
}

export default generalReducer;