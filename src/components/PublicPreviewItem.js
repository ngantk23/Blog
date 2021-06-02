import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components'

const PublicPreviewItemContainer = styled.li`
    list-style: none;
    background-color: #fff;
    margin-top: 30px;
    padding:30px 40px;
    &::after{
        display: block;
    content: '';
    clear: both;
    }
`

const PublicPreviewTitle = styled.div`
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 15px;
    cursor: pointer;
`
const PublicPreviewTime = styled.div`
    color:grey;
    margin-bottom: 30px;
`
const PublicPreviewContent = styled.p`
    color:grey;
    line-height: 1.5rem;
    height: 6rem;
    overflow: hidden;
`

const ViewDetailBtn = styled.div`
    float: right;
    font-size: 17px;
    font-weight: 800;
    cursor: pointer;
    color: rgb(0, 145, 255);
`

const PublicViewItem = ({ id, title, time,  content }) => {
    const location = useLocation();
    const history = useHistory();
    return (
        <PublicPreviewItemContainer>
            <PublicPreviewTitle
                onClick={() => {
                    history.push({
                        pathname: `${location.pathname}/${id}`,
                        state: { id },
                    });
                }}
            >
                {title}
            </PublicPreviewTitle>
            <PublicPreviewTime>{time}</PublicPreviewTime>
            <PublicPreviewContent>{content}</PublicPreviewContent>
            <ViewDetailBtn
                onClick={() => {
                    history.push({
                        pathname: `${location.pathname}/${id}`,
                        state: { id },
                    });
                }}
            >Đọc thêm</ViewDetailBtn>
        </PublicPreviewItemContainer>
    );
};

export default PublicViewItem;