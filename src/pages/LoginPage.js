import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchDataRequest, setCurrentAccountId, setIsLogin } from '../store/action';
import './login.css'

const LoginPage = () => {
    const isLogin = useSelector(state => state.ArticleReducer.isLogin);
    const currentAccountId = useSelector(state => state.ArticleReducer.currentAccountId);
    const listAccount = useSelector(state => state.ArticleReducer.listAccount);
    const [usernameL, setUsernameL] = useState('');
    const [passwordL, setPasswordL] = useState('');
    const [wrongAccount, setWrongAccount] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch(); 
    useEffect(() => {
        document.title = "Welcome";
        dispatch(fetchDataRequest());
    }, []);
    if (isLogin) {
        history.push(`/${currentAccountId}`);
        return null;
    }

    else return (
        <div className='login-container'>
            <h2 className='login-title'>Đăng nhập</h2>
            <form
                className="login-form"
                onSubmit={(e) => {
                    e.preventDefault();
                    let ok = false;
                    listAccount.map((account) => {
                        if (account.user.username === usernameL && account.user.password === passwordL) {
                            ok = true;
                            dispatch(setCurrentAccountId(account.id));
                            dispatch(setIsLogin(true));
                            history.replace(`/${account.id}`);
                        }
                    })

                    if (!ok) {
                        setWrongAccount(true);
                    }
                }}
            >
                <input
                    type="text"
                    className="inp-username"
                    name="username"
                    value={usernameL}
                    placeholder='Email hoặc tên tài khoản'
                    onChange={(e) => {
                        setUsernameL(e.target.value);
                    }}
                />
                <br></br> <br />


                <input
                    type="password"
                    className="inp-password"
                    name="password"
                    value={passwordL}
                    placeholder='Mật khẩu'
                    onChange={(e) => {
                        setPasswordL(e.target.value);
                    }}
                />
                <br /> <br />


                <div style={wrongAccount ? { color: "red", textAlign: 'center' } : { color: "transparent" }}>Sai thông tin tài khoản!</div>
                <br />

                <button className='login-btn'>Đăng nhập</button>

            </form>
        </div>
    );
};

export default LoginPage;