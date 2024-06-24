import {createBrowserRouter} from "react-router-dom";
import {Releases} from "src/components/pages/Releases.tsx";
import {App} from "src/components/App.tsx";
import {MainPage} from "src/components/pages/MainPage.tsx";

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
                element: <Releases/>
            },

        ],
    },
]);