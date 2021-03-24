import generalType from './general.types';

export const addNotif = (type,text) => (dispatch) => {
    dispatch({
        type: generalType.ADD_NOTIF,
        payload: {type,text}
    })
}
export const showedNotif = () => (dispatch) => {
    dispatch({
        type: generalType.SHOWED_NOTIF
    })
}

export const setLoading = (val) => (dispatch) => {
    dispatch({
        type: generalType.SET_LOADING,
        payload: val
    })
}