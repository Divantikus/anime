import {createBrowserRouter} from "react-router-dom";
import {Schedule} from "src/components/pages/Schedule.tsx";
import {App} from "src/components/App.tsx";
import {MainPage} from "src/components/pages/MainPage.tsx";
import {Releases} from "src/components/pages/Releases.tsx";

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

        ],
    },
]);