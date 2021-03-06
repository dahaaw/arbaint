import axios from 'axios';
import authType from './auth.type';
import {constant} from '../../../config';
import qs from 'qs';
import Cookies from 'universal-cookie';
import { addNotif, setLoading } from '../general/general.action';
import { setProfile } from '../user/user.action';
const cookies = new Cookies();
const {apiUrl} = constant;

export const showModal = (what,bool) => (dispatch) => {
    dispatch({
        type: 'SHOW_'+what,
        payload: bool
    })
} 

export const login = (val) => (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }
    const dataLogin = qs.stringify({
        "client_id": "arbaint",
        "client_secret": "arbaintcs",
        "username": val.email,
        "password": val.password,
        "grant_type": "password",
        "timezone": "Asia/Jakarta"
    })
    axios
    .post(apiUrl+"v1/auth/login", dataLogin, config)
    .then((data) => {
        console.log(data)
        if(data.data.access_token){
            cookies.set('token', data.data.access_token)
            dispatch(tokenCheck());
            dispatch({type:authType.LOGGED_IN})
            dispatch(addNotif('success','berhasil login'));
            dispatch(addNotif(false,false));
        }else{
            dispatch(addNotif('warning',data.data.message[0]));
        }
        setTimeout(() => {
            dispatch(setLoading(false));
        }, 1000);
    })
    .catch((err) => {
        console.log(err)
        // dispatch({
        //     type: generalType.ADD_NOTIF, 
        //     payload: err.data.message
        // })
    })
}

export const setLogged = (val) => (dispatch) => {
    if(!val){
        cookies.remove('token')
        dispatch(setProfile(false))
    }
    dispatch({
        type: authType.LOGGED,
        payload: val
    })
}

export const register = (val) => (dispatch) => { 
    val.client = 'arbaint';
    // console.log(val)
    axios
    .post(apiUrl+"v1/auth/register",val)
    .then((res) =>{
        if(res.data.success){
            dispatch({
                type: authType.SHOW_REGISTER,
                payload: false
            })
            dispatch({
                type: authType.SHOW_LOGIN,
                payload: true
            })
            dispatch(addNotif('success','pendaftaran berhasil'))
        }else{
            let count = 0;
            // console.log(res.data.message); return;
            for (const [key,value] of Object.entries(res.data.message)) {
                if(count === 0){
                    var message = {key, value};
                } ;
                count++;
            }
            dispatch(addNotif('warning',message.value))    
        }
        setTimeout(() => {
            dispatch(setLoading(false))
        }, 1000);
    })
    .catch((err) => {
        console.log({err})
    })
}

export const tokenCheck = () => (dispatch) => {
    const config = {
        headers: {Authorization: `Bearer ${cookies.get('token')}`}
    }
    axios
    .get(constant.apiUrl+"v1/user/profile",config)
    .then((data) => {
        if(data.data.success){
            dispatch(setProfile(data.data.data))
            dispatch(setLogged(true));
        }else{
            dispatch(setLogged(false));                  
        }
    })
}