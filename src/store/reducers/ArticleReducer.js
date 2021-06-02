import CallApi from '../../utils/CallApi';
import * as types from '../const';

const initialState = {
    isEdit: false,
    isLogin: false,
    currentAccountId: 123,
    visitAccountId: 123,
    listAccount: [],
}

const ArticleReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_DATA: {
            return {
                ...state,
                listAccount: action.payload
            }
        }
        case types.SET_IS_LOGIN: {
            return {
                ...state,
                isLogin: action.payload,
            }
        }
        case types.SET_IS_EDIT: {
            return {
                ...state,
                isEdit: action.payload,
            }
        }

        case types.SET_CURRENT_ACCOUNT_ID: {
            return {
                ...state,
                currentAccountId: action.payload,
            }
        }
        case types.SET_VISIT_ACCOUNT_ID: {
            return {
                ...state,
                visitAccountId: action.payload,
            }
        }

        // case types.ADD_NEW_ACCOUNT:{

        // }

        // case types.DELETE_ACCOUNT:{

        // }

        case types.ADD_NEW_ARTICLE: {
            let newListAccount = [...state.listAccount];
            let currentAccount = null;
            let indexAccount = 0;
            newListAccount.map((item, index) => {
                if (item.id == action.payload.accountId) {
                    currentAccount = item;
                    indexAccount = index;
                }
            })
            currentAccount.blog.articles.unshift(action.payload.article);
            newListAccount[indexAccount] = currentAccount;
            CallApi(`accounts/${currentAccount.id}`, 'PUT', currentAccount).then(res => {
                console.log(res);
            })
            return {
                ...state,
                listAccount: newListAccount,
            }

        }

        case types.DELETE_ARTICLE: {
            let currentAccount = null;
            let newListAccount = [...state.listAccount];
            let indexAccount = 0;
            let indexArticle = 0;
            newListAccount.map((item, index) => {
                if (item.id == action.payload.idAccount) {
                    currentAccount = item;
                    indexAccount = index;
                }
            })
            let newListArticle = currentAccount.blog.articles;
            let newBlog = currentAccount.blog;
            newListArticle.map((item, index) => {
                if (item.id == action.payload.idArticle) indexArticle = index;
            })

            newListArticle.splice(indexArticle, 1);
            newBlog = {
                ...newBlog,
                articles: newListArticle
            }
            currentAccount = {
                ...currentAccount,
                blog: newBlog
            }
            newListAccount[indexAccount] = currentAccount
            // newListAccount[indexAccount] = currentAccount;
            CallApi(`accounts/${currentAccount.id}`, 'PUT', currentAccount).then(res => {
                console.log(res);
            })
            return {
                ...state,
                listAccount: newListAccount,
            }
        }

        case types.UPDATE_ARTICLE: {
            let currentAccount = null;
            let newListAccount = [...state.listAccount];
            let indexAccount = 0;
            let indexArticle = 0;
            newListAccount.map((item, index) => {
                if (item.id == action.payload.accountId) {
                    currentAccount = item;
                    indexAccount = index;
                }
            })
            let newListArticle = currentAccount.blog.articles;
            let newBlog = currentAccount.blog;
            newListArticle.map((item, index) => {
                if (item.id == action.payload.article.id) indexArticle = index;
            })

            newListArticle[indexArticle] = action.payload.article;
            newBlog = {
                ...newBlog,
                articles: newListArticle
            }
            currentAccount = {
                ...currentAccount,
                blog: newBlog
            }
            newListAccount[indexAccount] = currentAccount
            // newListAccount[indexAccount] = currentAccount;
            CallApi(`accounts/${currentAccount.id}`, 'PUT', currentAccount).then(res => {
                console.log(res);
            })
            return {
                ...state,
                listAccount: newListAccount,
            }
        }


        default:
            return state;
    }
}

export default ArticleReducer;