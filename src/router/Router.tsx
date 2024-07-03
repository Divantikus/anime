import {createBrowserRouter} from "react-router-dom";
import {WatchPage} from "src/components/pages/WatchPage.tsx";
import {Schedule} from "src/components/pages/Schedule.tsx";
import {MainPage} from "src/components/pages/MainPage.tsx";
import {Releases} from "src/components/pages/Releases.tsx";
import {App} from "src/components/App.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element:<App/>,
        children: [
            {
                path: "/",
                element: <MainPage/>
            },
            {
                path: "releases/",
                element: <Releases/>,
            },
            {
                path: "schedule/",
                element: <Schedule/>
            },
            {
                path: "watch/:id",
                element: <WatchPage/>,
            },
        ],
    },
]);