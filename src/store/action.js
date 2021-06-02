import { useDispatch } from 'react-redux'
import CallApi from '../utils/CallApi'
import * as types from './const'

// const dispatch = useDispatch();

export const fetchData = (listAccount) =>{
    return{
        type: types.FETCH_DATA,
        payload: listAccount
    }
}
export const fetchDataRequest = () =>{
    return (dispatch) => {
        return CallApi('accounts', 'GET', null).then(res => {
            dispatch(fetchData(res.data));
        })
    }
}

export const setIsLogin = (status)=>{
    return {
        type: types.SET_IS_LOGIN,
        payload: status,
    }
}
export const setIsEdit = (status)=>{
    return {
        type: types.SET_IS_EDIT,
        payload: status,
    }
}

export const setCurrentAccountId = (id)=>{
    return {
        type: types.SET_CURRENT_ACCOUNT_ID,
        payload: id,
    }
}

export const setVisitAccountId = (id) =>{
    return{
        type: types.SET_VISIT_ACCOUNT_ID,
        payload: id,
    }
}



// export const addNewAccount = (name, domain, username, email, password, gender, blogName)=>{
//     return{
//         type: types.ADD_NEW_ACCOUNT,
//         payload: {
//             name: name,
//             domain: domain, // chon ten mien cho blog cua ban
//             username: username, //ten hien thi
//             email: email,
//             password: password,
//             gender: gender,
//             blogName: blogName,
//         },
//     }
// }

// export const deleteAccount = (id) =>{
//     return{
//         type: types.DELETE_ACCOUNT,
//         payload: id,
//     }
// }

// export const addNewArticleRequest = (accountId, article) => {
//     export const fetchDataRequest = () =>{
//         return (dispatch) => {
//             return CallApi('accounts', 'GET', null).then(res => {
//                 dispatch(fetchData(res.data));
//             })
//         }
//     }
// }

export const addNewArticle = (accountId, article) =>{
    return{
        type: types.ADD_NEW_ARTICLE,
        payload :{
            accountId,
            article,
        }
            
    }
}

export const deleteArticle = (idAccount, idArticle) => {
    return{
        type: types.DELETE_ARTICLE,
        payload: {
            idAccount,
            idArticle,
        }
    }
}

export const updateArticle = (accountId, article) =>{
    return{
        type: types.UPDATE_ARTICLE,
        payload:{
            accountId,
            article
        } 
    }
}