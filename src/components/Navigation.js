import React, { useState } from 'react';
import '../App.css'
import $ from 'jquery'
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components'

const NavbarContainer = styled.nav`
    margin-top: 40px;
`

const Mask = styled.div`
    position:fixed;
    width:100%;
    height: 100%;
    z-index: -1;
    top:0;
    left:0;
    background-color: rgba(0, 0, 0, 0.07);
    transition: all .2s;

    &.mask-active{
        z-index:1;
    }
`
const Clearfix = styled.div`
    clear:both;
`

const MenuBtn = styled.div`
    color: white;
    font-size: 20px;
    cursor: pointer;
    font-weight: bold;
    float:left;
`
const SearchIcon = styled.div`
    color: white;
    font-size: 20px;
    cursor: pointer;
    font-weight: bold;
`

const SearchContainer = styled.div`
    float: right;
    display: flex;
    transition: all .5s;
    padding-bottom: 2px;
    border-bottom: 1px solid transparent;

    &.search-container-active{
        border-bottom: 1px solid white;
        padding-right: 5px;
        z-index: 1;
        position: relative;
        .input-search{
            width: 270px;
            margin-left: 15px;
            margin-right: 20px;
        }
        .search-btn{
            display:block;
        }
    }
`

const InputSearch = styled.input`
    display: block;
    width: 0px;
    background-color: transparent;
    border: none;
    margin-left: 0px;
    margin-right: 0px;
    padding-bottom: 0;
    transition: all .5s;
    padding-top: 3px;
    font-size: 15px;
    color: white;
    &:focus-visible{
        outline:unset;
    }
    &::placeholder{
        color: rgb(192, 185, 185);
    }

`
const SearchBtn = styled.div`
    &.search-btn{
        display: none;  
        color: rgb(192, 185, 185);
        font-size: 18px;  
        font-weight: 500;
        cursor: pointer;
        pointer-events: none;
        overflow: hidden;
        padding-top: 3px;

    }
    &.search-btn-active{
        pointer-events: all;
        color: white;
        transition: all .2s;
        &:hover{
            color: wheat;
        }
    }
`

const Menu = styled.div`
    position: fixed;
    top: 0;
    left: -285px;
    background-color: rgb(255, 255, 255);
    width: 285px;
    height: 100%;
    transition: all .2s;
    &.menu-active{
        left:0;
        z-index: 1;
    }
`
const OutMenuBtn = styled.div`
    margin-top: 15px;
    margin-left: 20px;
    font-size: 20px;
    cursor: pointer;
`

const MenuAvt = styled.div`
    width: 120px;;
    height: 120px;
    border-radius: 50%;
    overflow: hidden;
    margin: 30px auto 20px;
    cursor: pointer;
    display: fixed;
    align-items: center;
`

const Avt = styled.img`
    width: 100%;
    transition: all .2s;
`

const NameBrief = styled.div`
    cursor: pointer;
    color:black;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 30px;
    text-transform: uppercase;
    float: left;
    margin-left: 50%;
    transform: translateX(-50%);
`
const ToBrief = styled.div`
    clear: both;
    cursor: pointer;
    font-size: 14px;
    border: 1px solid rgb(110, 200, 241);
    float: left;
    margin-left: 50%;
    transform: translateX(-50%);
    padding: 3px 12px;
    border-radius: 14px;
    font-weight: 600;
    transition: all .2s;
    color: rgb(110, 200, 241);
    &:hover{
        background-color: rgb(110, 200, 241);
        color: white;
    }
`

const ToHome = styled.div`
    clear: both;
    color:grey;
    position: absolute;
    bottom: 50px;
    cursor: pointer;
    left:50%;
    transform: translate(-50%,0);
    transition: all .2s;
    &:hover{
        text-decoration: underline;
        color: rgb(61, 61, 61);
    }
`

function Navigation({ account }) {
    const history = useHistory();
    const [inpSearch, setInpSearch] = useState('');
    const currentAccountId = useSelector(state => state.ArticleReducer.currentAccountId);

    return (
        <div>
            <Mask
                className="mask"
                onClick={() => {
                    $('.mask').removeClass('mask-active');
                    $('.menu').removeClass('menu-active');
                    $('.search-container').removeClass('search-container-active');
                }}
            ></Mask>
            <NavbarContainer className="navbar-container">
                <MenuBtn
                    onClick={() => {
                        $('.menu').toggleClass('menu-active');
                        $('.mask').toggleClass('mask-active');
                    }}
                >
                    <i className="fas fa-bars"></i>
                </MenuBtn>
                {/* ----search container */}
                <SearchContainer className="search-container">
                    <SearchIcon
                        onClick={() => {
                            $('.search-container').toggleClass('search-container-active');
                            $('.mask').addClass('mask-active');
                            setInpSearch('');
                        }}
                    >
                        <i className="fas fa-search"></i>
                    </SearchIcon>
                    <InputSearch
                        type="text"
                        placeholder='Bạn muốn tìm gì?'
                        className='input-search'
                        value={inpSearch}
                        onChange={(e) => {
                            setInpSearch(e.target.value);
                        }}
                    />
                    <SearchBtn
                        className={inpSearch === '' ? "search-btn" : 'search-btn search-btn-active'}

                    >Tìm kiếm</SearchBtn>
                </SearchContainer>


                <Clearfix className="clearfix"></Clearfix>
                {/* -------menu side */}
                <Menu className='menu'>
                    <OutMenuBtn
                        className="out-menu-btn"
                        onClick={() => {
                            $('.menu').toggleClass('menu-active');
                            $('.mask').toggleClass('mask-active');
                        }}
                    >
                        <i className="fas fa-arrow-left"></i>
                    </OutMenuBtn>
                    <div className="to-brief-container">
                        <MenuAvt className="menu-avt" onClick={() => history.push(`/${account.id}/hosonguoidung`)}>
                            <Avt src={account.avatar} alt="" />
                        </MenuAvt>
                        <NameBrief className="name-brief" onClick={() => history.push(`/${account.id}/hosonguoidung`)}>
                            {account.user.username}
                        </NameBrief>
                        <ToBrief className="to-brief" onClick={() => history.push(`/${account.id}/hosonguoidung`)}>
                            Truy cập hồ sơ
                        </ToBrief>
                    </div>
                                            
                        <ToHome
                            onClick={() => {
                                history.push(`/${currentAccountId}`)
                            }}
                        >
                            Home
                        </ToHome>
                    
                </Menu>
            </NavbarContainer>

        </div>

    );
}

export default Navigation;