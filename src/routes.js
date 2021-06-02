import React from 'react';
import PublicItemPage from './pages/PublicItemPage';
import BriefPage from './pages/BriefPage';
import UserPublicPage from './pages/UserPublicPage';
import WelcomePage from './pages/WelcomePage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import UserPrivatePage from './pages/UserPrivatePage';
import PrivateItemPage from './pages/PrivateItemPage';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <WelcomePage />
    },
    {
        path: '/login',
        exact: true,
        main: () => <LoginPage />
    },
    {
        path: '/:id',
        exact: true,
        main: () => <UserPrivatePage />
    },
    {
        path: '/blogspot/:domain',
        exact: true,
        main: () => <UserPublicPage />
    },

    {
        path: '/:id/hosonguoidung',
        exact: true,
        main: () => <BriefPage />
    },
    {
        path: '/blogspot/:domain/:id',
        exact: true,
        main: () => <PublicItemPage />
    },
    {
        path: '/:idAccount/:idPost',
        exact: true,
        main: () => <PrivateItemPage />
    },
    {
        path: '/:string',
        exact: true,
        main: () => <NotFoundPage />
    }

];

export default routes;