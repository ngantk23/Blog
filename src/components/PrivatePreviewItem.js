import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteAccount, deleteArticle, setIsEdit } from '../store/action';

const ItemContainer = styled.div`
    border: 1px solid grey;
    padding: 20px;
    margin-top: 20px;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    color: grey;
    cursor: pointer;
    &:hover{
        box-shadow: 1px 1px 8px 2px rgba(0,0,0,.3);
        .control{
            opacity: 1;
            transform: translateX(0px);
        }
    }
`;

const InfoTitle = styled.div`
    color: rgb(70, 69, 69);
    font-size: 20px;
    font-weight: 700;
`
const InfoTime = styled.div`
    font-size: 15px;
    margin-top: 18px;
`
const Control = styled.div`
    display: flex;
    color: rgb(70, 69, 69);
    font-size: 20px;
    padding-left: auto;
    padding-right: 0;
    margin-bottom: 10px;
    float: right;
    opacity: 0;
    transform: translateX(20px);
    transition: all .1s;
`
const InfoAuthor = styled.div`
    display:flex;
    align-items: center;
    clear: both;
`
const AuthorImgContainer = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    margin-left: 10px;
`
const AuthorImg = styled.img`
    width: 100%;
    align-items: center;
`

const PrivatePreviewItem = ({ article }) => {
    const currentAccountId = useSelector(state => state.ArticleReducer.currentAccountId);
    const listAccount = useSelector(state => state.ArticleReducer.listAccount);
    const history = useHistory();
    const dispatch = useDispatch();
    let currentAccount = null;
    listAccount.map(item => {
        if (currentAccountId === item.id) currentAccount = item;
    })
    return (
        <ItemContainer className="preview-item-container"
            onClick={() => {
                dispatch(setIsEdit(true));
                history.push(`/${currentAccountId}/${article.id}`)
            }}
        >
            <div className="info">
                <InfoTitle>{article.title}</InfoTitle>
                <InfoTime>Ngày xuất bản: {article.time}</InfoTime>
            </div>
            <div>
                <Control className='control'>
                    <div
                        className="delete"
                    >
                        <i className="fas fa-trash"
                            onClick={(e) => {
                                e.stopPropagation();
                                dispatch(deleteArticle(currentAccountId, article.id))
                            }}
                        ></i>
                    </div>
                </Control>
                <InfoAuthor>
                    <span className='author-name'>{currentAccount.user.username}</span>
                    <AuthorImgContainer>
                        <AuthorImg src={currentAccount.avatar} alt="" className="author-img" />
                    </AuthorImgContainer>
                </InfoAuthor>
            </div>

        </ItemContainer>
    );
};

export default PrivatePreviewItem;