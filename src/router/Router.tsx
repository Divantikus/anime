import { downloadFullInformationAboutAnime } from 'src/functions/downloadFullInformationAboutAnime.ts';
import { createBrowserRouter } from 'react-router-dom';
import { Registration } from 'src/components/registration-form/Registration.tsx';
import { WatchPage } from 'src/components/pages/WatchPage.tsx';
import { LoginForm } from 'src/components/login-form/LoginForm.tsx';
import { Schedule } from 'src/components/pages/Schedule.tsx';
import { MainPage } from 'src/components/pages/MainPage.tsx';
import { Releases } from 'src/components/pages/Releases.tsx';
import { App } from 'src/components/App.tsx';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <MainPage />,
            },
            {
                path: 'releases/',
                element: <Releases />,
            },
            {
                path: 'schedule/',
                element: <Schedule />,
            },
            {
                path: 'watch/:slug',
                element: <WatchPage />,
                loader: downloadFullInformationAboutAnime,
                shouldRevalidate: ({currentUrl, nextUrl}) => !(currentUrl.pathname === nextUrl.pathname)
            },
        ],
    },
    {
        path: 'login/',
        element: <LoginForm />,
    },
    {
        path: 'registration/',
        element: <Registration />,
    },
]);
