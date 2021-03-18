import axios from 'axios';
import authType from './auth.type';
import generalType from '../general/general.types';
import {constant} from '../../../config';

const {apiUrl} = constant;

export const showModal = (what,bool) => (dispatch) => {
    dispatch({
        type: 'SHOW_'+what,
        payload: bool
    })
} 

export const login = (val) => (dispatch) => {
    const logged = (val.email === val.password);
    if(logged){
        
        dispatch({
            type: authType.LOGGED,
            payload: true
        })
        dispatch({
            type: authType.SHOW_LOGIN,
            payload: false
        })
        dispatch({
            type: authType.SHOW_REGISTER,
            payload: false
        })
    }else{
        dispatch({
            type: generalType.ADD_NOTIF, 
            payload: 'email atau password salah'
        })
    }
}

export const register = (val) => (dispatch) => {
    axios
    .post(apiUrl+"v1/auth/register",val)
    .then((res) =>{
        if(res.success){
            console.log(res);
        }else{
            let count = 0;
            for (const [key, value] of Object.entries(res.data.message)) {
                if(count === 0){
                    var message = value;
                } ;
                count++;
            }
            dispatch({
                type: generalType.ADD_NOTIF,
                payload: message
            })    
        }
    })
    .catch((err) => {
        console.log(err)
    })
}