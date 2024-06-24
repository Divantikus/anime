import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import {router} from "src/router/Router.tsx";
import "./main.scss"
import {QueryClient, QueryClientProvider} from "react-query";

const client = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={client}>
        <RouterProvider router={router}/>
    </QueryClientProvider>
)
