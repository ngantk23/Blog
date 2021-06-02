import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink, useHistory } from 'react-router-dom';
// import './welcomePage.css'
import logo from '../images/logo.png'
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataRequest } from '../store/action';
import styled from 'styled-components' 
import bg from '../images/rung3.jpg'

const WelcomePageContainer = styled.div`
    background-image: url(${bg});
    background-attachment: fixed;
    background-size: cover;
    background-position-x: right;
    width: 100%;
    height: 100%;
    position: fixed;
    box-sizing: border-box;
`

const WelcommeNavbar = styled.nav`
    overflow: hidden;
    padding: 10px 20px;
    box-sizing: border-box;
    &::after{
        display: block;
        content: '';
        clear: both;
    }
`

const LogoWrapper = styled.div`
    float: left;
    padding: 0;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    cursor: pointer;
    img{
        width: 45px;
        padding: 0;
        margin-right: 20px;
    }
    span{
        font-size: 20px;
        color: white;
        font-weight: 600;
    }

`

const LoginBtn = styled.a`
    margin-top: 8px;
    float: right;
    color: white;
    text-decoration: none;
    font-size: 16px;
    box-sizing: border-box;
    cursor:pointer;
    &:hover{
        color: white;
        text-decoration: underline;
    }
`

const Intro = styled.h1`
    text-align: center;
    color:white;
    font-size: 35px;
    display: block;
    margin: 80px auto 50px;
    box-sizing: border-box;
`

const SignupBtn = styled.a`
    background-color: rgb(253, 123, 0);
    color: white;
    text-decoration: none;
    font-size: 14px;
    padding: 13px 23px;
    font-weight: 600;
    border-radius: 3px;
    float: left;
    margin-left: 50%;
    transform: translateX(-50%);
    transition: all .2s;
    box-sizing: border-box;
    cursor: pointer;
    &:hover{    
        background-color: rgb(252, 134, 24);
    }
`

function WelcomePage(props) {
    const  dispatch = useDispatch();

    useEffect(() => {
        document.title = "Welcome";
        dispatch(fetchDataRequest());
    }, []);
    const history= useHistory();
    return (
        <WelcomePageContainer>
            <WelcommeNavbar>
                <LogoWrapper onClick={() => history.push(`/login`)}>
                    <img src={logo} alt=""  />
                    <span >Blogger</span>
                </LogoWrapper>
                <LoginBtn onClick={() => history.push(`/login`)}>ĐĂNG NHẬP</LoginBtn>
            </WelcommeNavbar>

            <Intro>Writing, Accelerating & Enjoying It..</Intro>

            <SignupBtn>TẠO BLOG CỦA BẠN</SignupBtn>
        </WelcomePageContainer>
    );
}

export default WelcomePage;