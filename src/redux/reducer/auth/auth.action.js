export const showModal = (what,bool) => (dispatch) => {
    dispatch({
        type: 'SHOW_'+what,
        payload: bool
    })
} 
