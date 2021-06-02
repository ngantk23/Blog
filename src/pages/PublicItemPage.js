import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from "styled-components"

const PageHeader = styled.div`
    margin: 60px auto 0;
    width: 890px;
    display: flex;
    box-sizing: border-box;
`

const GobackIcon = styled.div`
    color: white;
    font-size: 22px;
    cursor: pointer;
`

const ArticleContainer= styled.div`
    width: 890px;
    background-color: #fff;
    margin: 50px auto 0;
    padding: 10px 40px;
    box-sizing: border-box;
`

const Time = styled.div`
    color: grey;
    line-height: 1.6;
    word-wrap: break-word;
    margin-bottom: 20px;
`
const Content = styled(Time)`
    margin-bottom: 40px;
`

const BlogName = styled.div`
    font-size: 25px;
    margin-top: -3px;
    margin-left: 25px;
    cursor: pointer;
    color:white;
    font-weight: 700;
`

function PublicItemPage(props) {
    const history = useHistory();
    const {id} = useParams()
    const visitAccountId = useSelector(state => state.ArticleReducer.visitAccountId);
    const listAccount = useSelector(state => state.ArticleReducer.listAccount);
    let articles = null;
    let articleToShow = null;
    let visitBlogName = null;
    let visitDomain = null;
    listAccount.map(item=>{
        if(item.id==visitAccountId){
            articles = item.blog.articles;
            visitBlogName = item.blog.blogName;
            visitDomain = item.domain;
        } 
    })
    articles.map(item=>{
        if(item.id==id) articleToShow = item;
    })

    useEffect(() => {
        document.title = articleToShow.title;
    })


    return (
        <div className='public-item-page-container'>
            <div className="mask"></div>
            <PageHeader className="page-header">
                <GobackIcon
                    className="goback-icon"
                    onClick={() => history.goBack()}
                >
                    <i className="fas fa-arrow-left"></i>
                </GobackIcon>
                <BlogName
                    onClick={() => history.push(`/blogspot/${visitDomain}`)}
                    className="blog-name"
                >
                    {visitBlogName}
                </BlogName>
            </PageHeader>
            <ArticleContainer className="article-container">
                <h2 className="title">
                    {articleToShow.title}
                </h2>
                <Time className="time"> {articleToShow.time}</Time>
                <Content className="content">{articleToShow.content}</Content>
                <p></p>
            </ArticleContainer>

        </div>
    );
}

export default PublicItemPage;