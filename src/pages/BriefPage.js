import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import './briefPage.css'
import logo from '../images/logo.png';

function BriefPage() {
    const history = useHistory();
    const listAccount = useSelector(state => state.ArticleReducer.listAccount);
    const currentAccountId = useSelector(state => state.ArticleReducer.currentAccountId);
    let {id}=useParams();
    id = parseInt(id);
    let accountToShow = null;
    listAccount.map(item=>{
        if(item.id == id) accountToShow = item;
    })



    return (
        <div className='briefpage-container'>
            <div className="brief-navbar">
                <div 
                    className="logo" 
                    style={{cursor:'pointer'}} 
                    onClick={()=> {
                        history.push(`/${currentAccountId}`);
                        // console.log(typeof id);
                    }}
                >
                    <img src={logo} alt="" className="logo-img" />
                    <span className='logo-text'>Blogger</span>
                </div>
                <div className="btn-container">
                    {/* {
                        !isLogin && <div className="login-btn">Đăng nhập</div>
                    }

                    {
                        isLogin && <div className="logout-btn">Đăng xuất</div>
                    } */}

                </div>
            </div>
            <div className="brief-content">
                <div className="brief-left">
                    <div className="username">{accountToShow.name}</div>
                    <div className="user-avt">
                        <img src={accountToShow.avatar} alt="" className="avt-img" />
                    </div>
                </div>
                <div className="brief-right">
                    Email: {accountToShow.user.email} <br/>
                    Ngày tham gia: {accountToShow.user.startDay} <br/>
                    Giới tính: {accountToShow.user.gender === -1 ? "Nữ" : accountToShow.user.gender === 1? "Nam" : "Khác"} <br/>
                    Blog của tôi: 
                        <span style={{color:'blue', cursor:'pointer'}} onClick={()=> history.push(`/blogspot/${accountToShow.domain}`)}>{accountToShow.blog.blogName}</span>
                        
                </div>


            </div>
        </div>
    );
}

export default BriefPage;