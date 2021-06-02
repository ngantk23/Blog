import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setVisitAccountId } from '../store/action';
import styled from 'styled-components'

const FollowItemContainer = styled.li`
    list-style: none;
    cursor: pointer;
    margin-left: 50px;
    display:fixed;
    align-items: center;
    float: left;
        clear:both;
    :hover{
        .userAvt{
            transform: scale(1.05);
        }
        /* .blogName{
            transform: scale(1.05);
        } */
    }
    /* ::after{
        display:block;
        content:'';
    } */
`

const BlogName = styled.p`
    font-size: 22px;
    font-weight: 600;
    margin-left: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
    transition: all .2s;
    /* float: left; */
`

const SpanUserName = styled.span`
    font-size: 18px;
`

const UserImgContainer = styled.div`
    /* display: inline-block; */
    width: 30px;
    height: 30px;
    overflow: hidden;
    border-radius: 50%;
    display: flex;
    transition: all .2s;
    /* clear:both; */
`

const UserImg = styled.img`
    width: 100%;
    align-items: center;
    transition: all .2s;
`

const FollowItem = ({ followId }) => {
    const listAccount = useSelector(state => state.ArticleReducer.listAccount);
    const history = useHistory();
    let accountToShow = null;
    const dispatch = useDispatch();
    listAccount.map(item => {
        if (item.id == followId) accountToShow = item;
    })
    return (
        <FollowItemContainer
            onClick={() => {
                dispatch(setVisitAccountId(parseInt(followId)));
                history.push(`/blogspot/${accountToShow.domain}`)
            }}
        >
            <UserImgContainer className='userAvt'>
                <UserImg src={accountToShow.avatar} alt="" />
            </UserImgContainer>
            <BlogName className='blogName'>{accountToShow.blog.blogName}
                {/* <SpanUserName class='blog-name'>{accountToShow.user.username}</SpanUserName> */}


            </BlogName>
        </FollowItemContainer>
    );
};

export default FollowItem;