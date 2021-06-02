import React from 'react';
import { useHistory } from 'react-router-dom';


const NotFoundPage = () => {
    const history = useHistory(); 
    return (
        <div>
            Not found
            <div
                onClick={()=> history.push('/login')}
            >Quay về trang chủ</div>
        </div>
    );
};

export default NotFoundPage;