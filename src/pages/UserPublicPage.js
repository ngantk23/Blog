import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Navigation from '../components/Navigation';
import './../App.css'
import { useSelector, useDispatch } from 'react-redux';
import PublicPreviewList from '../components/PublicPreviewList';
import styled from 'styled-components'
import bg from '../images/Home.jpg'

const HomePageContainer = styled.div`
    width: 890px;
    margin: 0 auto;
    &::after{
        position: absolute;
        display: block;
        height: 75vh;
        width: 100%;
        top: 0px;
        left: 0;
        clear: both;
        content: '';
        z-index: -2;
        background-image: url(${bg});
        background-size: cover;
        background-position: center top;
    }
`

const BlogName = styled.div`
    color: white;
    font-size: 43px;
    text-align: center;
    font-weight: 900;
    margin-top: 40px;
`


function UserPublicPage({match}) {
    
    const listAccount = useSelector(state => state.ArticleReducer.listAccount);
    const visitAccountId = useSelector(state => state.ArticleReducer.visitAccountId);
    const [search, setSearch] = useState('');
    let accountToShow = null;
    listAccount.map(item=>{
        if(item.id == visitAccountId) accountToShow=item;
    })
    useEffect(() => {
        document.title = accountToShow.blog.blogName;
        // console.log(match);
    }, []);

    return (
        <HomePageContainer className='homepage-container'>
            <Navigation account={accountToShow} search={search}/>
            <BlogName className="blog-name">{accountToShow.blog.blogName}</BlogName>
            <PublicPreviewList/>
        </HomePageContainer>
    );
}

export default UserPublicPage;