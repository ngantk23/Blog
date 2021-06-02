import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components'
import { addNewArticle, setIsEdit, updateArticle } from '../store/action';

const PrivateItemPageContainer = styled.div`
    width: 890px;
    margin: 120px auto 0;
`

const InputTitle = styled.input`
    width: 80%;
    margin-bottom: 40px;
    padding: 20px 0 1px;
    border:none;
    font-size: 17px;
    border-bottom: 1px solid grey;
    padding-left: 4px;
    font-weight: 600;
    &:focus-visible{
        outline-color: transparent;
    }
    &::placeholder{
        font-family: 'Times New Roman', Times, serif;
        font-size: 17px;
    }
    
`

const Button = styled.button`
    float:right;
    width: 14%;
    font-size: 16px;
    padding: 11px 0px 10px;
    color: white;
    border: none;
    cursor: pointer;
    background-color: #ff7b00;
    font-weight: 600;
    border-radius: 5px;
    .fab{
        font-size: 20px;
        margin-right: 7px;
    }
`

const InputContent = styled.textarea`
    display: block;
    clear:both;
    width: 100%;
    resize:none;
    height: 400px;
    font-size: 15px;
    font-family: Arial, Helvetica, sans-serif;
    padding-top: 20px;
    padding-bottom: 10px;
    padding-right: 5px;
    padding-left: 5px;
    &::placeholder{
        font-family: 'Times New Roman', Times, serif;
        font-size: 17px;
    }
`

const Navigation = styled.nav`
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    padding-left: 30px;
    padding-top: 12px;
    padding-bottom: 12px;
    font-size: 24px;
    border-bottom: 1px solid #c4c0c0;
    z-index: 2;
    background-color: #fff;
    .fas{
        cursor: pointer;
    }
    
`

const PrivateItemPage = () => {
    const listAccount = useSelector(state => state.ArticleReducer.listAccount);
    const isEdit = useSelector(state => state.ArticleReducer.isEdit);
    const currentAccountId = useSelector(state => state.ArticleReducer.currentAccountId);
    const history = useHistory();
    const dispatch = useDispatch();
    const { idAccount, idPost } = useParams();
    let postToShow = {};

    let accountToShow = {};
    listAccount.map(item => {
        if (item.id == parseInt(idAccount)) accountToShow = item;
    })
    accountToShow.blog.articles.map(item => {
        if (item.id == parseInt(idPost)) postToShow = item;
    })


    var x = Date.now();
    var d = new Date();
    let time = d.getDate() + '/' + d.getMonth() + '/' + d.getFullYear();
    postToShow = {
        ...postToShow,
        time: time,
        id: parseInt(idPost),
    }

    useEffect(() => {
        document.title = 'Bài đăng'
    });

    return (
        <PrivateItemPageContainer className='private-item-page_container'>
            <Navigation >
                <i
                    className="fas fa-arrow-left"
                    onClick={() => {
                        history.goBack();
                        dispatch(setIsEdit(false));
                    }}

                ></i>
            </Navigation>
            <div>

                <InputTitle
                    placeholder='Title'
                    className="set-article-title"
                    defaultValue={postToShow.title}
                    onChange={(e) => {
                        postToShow = {
                            ...postToShow,
                            title: e.target.value,
                        }
                    }}
                />
                <Button
                    onClick={() => {
                        console.log(postToShow);
                        if (!isEdit){
                            dispatch(addNewArticle(currentAccountId, postToShow));
                        } 
                        else {
                            dispatch(setIsEdit(false));
                            dispatch(updateArticle(currentAccountId, postToShow));
                        }
                        history.push(`/${idAccount}`)
                    }}
                >
                    <i className="fab fa-telegram-plane"></i>
                    Xuất bản
                </Button>
                <InputContent
                    placeholder='Content'
                    className="set-article-content"
                    defaultValue={postToShow.content}
                    onChange={(e) => {
                        postToShow = {
                            ...postToShow,
                            content: e.target.value,
                        }
                    }}
                />
            </div>

        </PrivateItemPageContainer>
    );
};

export default PrivateItemPage;