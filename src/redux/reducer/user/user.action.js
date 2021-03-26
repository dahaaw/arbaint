import userType from './user.type';

export const setProfile = (val) => (dispatch) => {
    dispatch({
        type: userType.SET_PROFILE,
        payload: val
    })
}