import React from 'react';
import { useSelector } from 'react-redux';
import PublicPreviewItem from './PublicPreviewItem';

const PublicPreviewList = () => {
    const listAccount = useSelector(state => state.ArticleReducer.listAccount);
    const visitAccountId = useSelector(state => state.ArticleReducer.visitAccountId);
    let listToShow = null;
    listAccount.map(item => {
        if (item.id == visitAccountId) listToShow = item.blog.articles;
    })

    return (
        <ul
            className="public-view__list"
            style={{ paddingLeft: '0' }}
        >
            {listToShow.map((article, index) => {
                return <PublicPreviewItem
                    key={index}
                    id={article.id}
                    title={article.title}
                    time={article.time}
                    content={article.content}
                />
            })}
        </ul>
    );
};

export default PublicPreviewList;