import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PrivatePreviewItem from '../components/PrivatePreviewItem';
import logo from '../images/logo.png';
import { setVisitAccountId } from '../store/action';
import $ from 'jquery'
import FollowItem from '../components/FollowItem';
import { useState } from 'react';
import styled from 'styled-components'

const PrivateNavbar = styled.div`    
    position: fixed;
    width: 100%;
    padding: 15px 20px;
    top: 0;
    left: 0;
    max-height: 100px;
    overflow: hidden;
    border-bottom: 1px solid rgb(225, 225, 225);
    background-color: white;
    z-index:1;  
    &::after {
        display: block;
        content: '';
        clear: both;
    }
`

const PrivateNavbarLeft = styled.div`
    float: left;
    margin-left: 22px;

`
const PrivateNavbarMain = styled.div`
    clear: both;
    position: relative;
    margin-top: 50px;
    display: flex;
    &::after {
        display: block;
        content: '';
        clear: both;
    }
`

const PrivateName = styled.h2`
    padding-top: 70px;
    text-align: center;
`

const Col25 = styled.div`
    width: 20%;
    transform: translateX(0);
    transition: all .3s;
    &.active-mode{
        transform: translateX(-100%);
    }
    ul{
        /* list-styled: none; */
        list-style-type:none;
    }
    i{
        margin-right: 10px;
    }
`
const Col75 = styled.div`
    transition: all .2s;
    width: 80%;
    padding-left: 60px;
    padding-right: 60px;
    transform: translateX(0);
    transition: all .3s;

    &.active-mode{
        transform: translateX(-10vw);
    }
`

const PrivateAddArticle = styled.li`
    list-style-type: none;
    margin-top: 20px;
    margin-bottom: 15px;
    font-size: 16px;
    color: rgb(255, 132, 0);
    border-radius: 20px;
    box-shadow: 1px 1px 5px rgb(150, 147, 147);
    float: left;
    clear: both;
    padding: 10px 20px;
    cursor: pointer;
    transition: all .2s;
    &:hover {
        box-shadow: 1px 1px 10px rgb(150, 147, 147);
    }
`

const MainMenuSelect = styled.li`
    ul{
        clear: both;
        padding-left: 15px;
        padding-top: 30px;
    }
    li{
        margin-top: 20px;
        font-size: 16px;
        cursor: pointer;
        i{
            width: 20px;
        }
        &.active {
            color: rgb(255, 132, 0);
        }
    }
`

const MainItem = styled.div`
    display: none;
    padding-bottom: 40px;
    &.active {
        display: block;
    }
`

const UserPrivatePage = () => {
    const history = useHistory();
    const isLogin = useSelector(state => state.ArticleReducer.isLogin);
    const currentAccountId = useSelector(state => state.ArticleReducer.currentAccountId);
    const listAccount = useSelector(state => state.ArticleReducer.listAccount);
    const dispatch = useDispatch();
    let currentAccount=null;
    let listToShow = null;
    let listFollow = null;
    listAccount.map((item) => {
        if (item.id === currentAccountId) {
            currentAccount = item;
            listToShow = item.blog.articles;
            listFollow = item.follow;
        }
    })

    if (isLogin)
        return (
            <div className='private-container'>
                <PrivateNavbar className="private-navbar" style={{ xIndex: '10', backgroundColor:'white' }}>
                    <PrivateNavbarLeft
                        className="private-navbar-left"
                        style={{ fontSize: '24px', cursor: 'pointer' }}
                        onClick={() => {
                            $('.col').toggleClass('active-mode')
                        }}
                    >
                        <i className="fas fa-bars"></i>
                    </PrivateNavbarLeft>
                </PrivateNavbar>

                <PrivateNavbarMain className="private-main" style={{ zIndex: '0' }}>
                    <Col25 className="col col-25 sidebar-menu" style={{ marginTop: '110px' }}>
                        <ul>
                            <PrivateAddArticle
                                className='private-add-article'
                                onClick={() => {
                                    let newId = Date.now();
                                    history.push(`/${currentAccountId}/${newId}`)
                                }}
                            >
                                <i className="fas fa-plus"></i>
                                Bài đăng mới
                            </PrivateAddArticle>
                            {/* ----- */}
                            <MainMenuSelect className='main-menu-select'>
                                <ul>
                                    <li
                                        className='private-articles active'
                                        onClick={() => {
                                            $('.private-articles').addClass('active');
                                            $('.private-follow').removeClass('active');
                                            $('.private-main-list').addClass('active');
                                            $('.private-main-follow').removeClass('active');

                                        }}
                                    >
                                        <i className="far fa-file-alt"></i>
                                        Bài đăng
                                    </li>
                                    <li
                                        className='private-follow'
                                        onClick={() => {
                                            $('.private-follow').addClass('active');
                                            $('.private-articles').removeClass('active');
                                            $('.private-main-follow').addClass('active');
                                            $('.private-main-list').removeClass('active');
                                        }}
                                    >
                                        <i className="fas fa-user-friends"></i>
                                        Theo dõi
                                    </li>

                                    <li
                                        className="private-brief"
                                        onClick={() => {
                                            history.push(`/${currentAccountId}/hosonguoidung`);
                                        }}
                                    >
                                        <i className="far fa-id-card"></i>
                                        Hồ sơ
                                    </li>

                                    <li
                                        className="private-sample"
                                        onClick={() => {
                                            dispatch(setVisitAccountId(currentAccountId));
                                            let visitDomain = null;
                                            listAccount.map((item) => {
                                                if (item.id === currentAccountId) {
                                                    visitDomain = item.domain;
                                                }
                                            })
                                            history.push(`/blogspot/${visitDomain}`);
                                        }}
                                    >
                                        <i className="fas fa-external-link-alt"></i>
                                        Xem mẫu
                                    </li>
                                </ul>
                            </MainMenuSelect>

                        </ul>
                    </Col25>


                    <Col75 className="col col-75 main-area">

                        <MainItem className="main-item active private-main-list">
                            <PrivateName className='private-name'>
                                {currentAccount.blog.blogName}
                            </PrivateName>
                            {listToShow.map((item, index) => {
                                return <PrivatePreviewItem article={item} key={index} />
                            })}
                        </MainItem>
                        <MainItem className="main-item private-main-follow">
                            <PrivateName className='private-name'>Danh sách theo dõi</PrivateName>
                            {
                                listFollow.map((item, index) => {
                                    return <FollowItem key={index} followId={item} />
                                })
                            }
                        </MainItem>
                    </Col75>
                </PrivateNavbarMain>
            </div>
        )
    else {
        history.push('/login');
        return null;
    }
};

export default UserPrivatePage;