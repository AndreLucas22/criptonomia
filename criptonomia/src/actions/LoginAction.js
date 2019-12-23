import {
    ATUALIZAR_TOKEN_LOGIN,
    ALTERAR_STATUS_LOGIN_LOADING,
    IMPORT_LIST_SUCCESS
} from './Types'

import axios from 'axios'
import { Actions } from 'react-native-router-flux';

export const listPost = () => {
    return dispatch => {

        axios.get('https://jsonplaceholder.typicode.com/posts', 
        {
        }).then(response => {
            
            console.log(response.data);
            // if(response.data.erro != undefined){
            //     buscarCepErro(response.data.erro, dispatch);
            // }else{
            //     console.log(response.data);
            //     buscarCepDados(response.data, dispatch);
            //     endereco(response.data.endereco, dispatch);
            //     cServico(response.data.cServico, dispatch);
            // }
        }).catch((e) => {
            console.log("to aqui"+e.response.status);
            // if(e.response.status == "403"){
            //     buscarTokenIdUsuario(buscarCepMain, cep, isEntregarEscola, listaCesta, dispatch)
            // }else{
            //     buscarCepErro('Não foi possível conectar com o servidor, verifique sua internet!', dispatch);
            // }
        });
        
    }
}
