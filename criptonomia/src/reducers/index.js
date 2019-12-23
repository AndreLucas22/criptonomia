import {combineReducers} from 'redux';
import AutenticacaoReducer from './AutenticacaoReducer'
import MainReducer from './MainReducer'

import LoginReducer from './LoginReducer'
import ListPostsReducer from './ListPostsReducer'
import ListPostsCommitReducer from './ListPostsCommitReducer'
import ListUserReducer from './ListUserReducer'

export default combineReducers ({
    AutenticacaoReducer: AutenticacaoReducer,
    MainReducer: MainReducer,



    LoginReducer:LoginReducer,
    ListPostsReducer:ListPostsReducer,
    ListPostsCommitReducer:ListPostsCommitReducer,
    ListUserReducer:ListUserReducer

})