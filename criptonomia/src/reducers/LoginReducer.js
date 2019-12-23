import {
    ATUALIZAR_TOKEN_LOGIN,
    ALTERAR_STATUS_LOGIN_LOADING,
    IMPORT_LIST_SUCCESS
} from '../actions/Types'

const INITIAL_STATE = {
    token: '',
    loadingLogin: false,
    msg:''
}
 
export default (state = INITIAL_STATE, action) =>{

    switch(action.type){

        case ATUALIZAR_TOKEN_LOGIN:{
            return {... state, msg: '', token:action.payload}
        }
        case ALTERAR_STATUS_LOGIN_LOADING:{
            return {... state, msg: '', loadingLogin:action.payload}
        }
        
    }  
    return state;
}