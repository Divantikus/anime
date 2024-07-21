import { createBrowserRouter, LoaderFunctionArgs } from 'react-router-dom';
import { Registration } from 'src/components/registration-form/Registration.tsx';
import { WatchPage } from 'src/components/pages/WatchPage.tsx';
import { LoginForm } from 'src/components/login-form/LoginForm.tsx';
import { Schedule } from 'src/components/pages/Schedule.tsx';
import { MainPage } from 'src/components/pages/MainPage.tsx';
import { Releases } from 'src/components/pages/Releases.tsx';
import { App } from 'src/components/App.tsx';
import { getDataService } from 'src/services/getDataFromServer.ts';

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
                loader: async (loaderArgs: LoaderFunctionArgs) => {
                    const data = await getDataService.getTitle(loaderArgs.params.slug)

                    if(data === "incorrect data") return "incorrect data"

                    return data.data;
                },
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
