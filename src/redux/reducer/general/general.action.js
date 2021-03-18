import generalType from './general.types';

export const addNotif = (notif) => (dispatch) => {
    dispatch({
        type: generalType.ADD_NOTIF,
        payload: notif
    })
}