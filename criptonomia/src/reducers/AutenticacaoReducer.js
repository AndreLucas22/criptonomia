import {
    BUSCAR_TOKEN,
    BUSCAR_TOKEN_ERRO,
    MODIFICA_EMAIL,
    MODIFICA_SENHA,
    LOGAR_USUARIO, 
    LOGIN_ANDAMENTO,
    ALTERAR_STATUS_LOGIN_LOADING,
    LOGAR_ERRO} from '../actions/Types'

const INITIAL_STATE = {
    email: '',
    senha: '',
    array: [],
    token: '',
    loading_login: false,
    is_logado: false,
    msg: ''
}

export default (state = INITIAL_STATE, action) =>{

    switch(action.type){
        case BUSCAR_TOKEN :{
            return {... state, token: action.payload, msg:'', loading_login:false}
        }
        case BUSCAR_TOKEN_ERRO :{
            return {... state, msg: action.payload, loading_login:false} 
        }
        case ALTERAR_STATUS_LOGIN_LOADING :{
            return {... state, msg: '', loading_login:action.payload}
        }
        case MODIFICA_EMAIL :{
            return {... state, email: action.payload}
        }
        case MODIFICA_SENHA :{
            return {... state, senha: action.payload}
        }
        case LOGAR_USUARIO :{
            return {... state, array: action.payload, loading_login:false, is_logado: true, msg:''}
        }
        case LOGIN_ANDAMENTO :{
            return {... state, loading_login: true}
        }
        case LOGAR_ERRO :{
            return {... state, loading_login:false, msg: action.payload}
        }
      
        
    }  
        return state;
}
    