import {createRoot} from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "./App.tsx";
import App2  from "./app2.tsx";
import App3 from "./App3.tsx";

const router = createBrowserRouter([
    {
        path:"/",element:<App/>,
        children:
        [
            {path: '2',element: <App2/>},
            {path: '3',element: <App3/>}
        ]
    },

])

createRoot(document.getElementById('root')!)
    .render(<RouterProvider router={router}/>);
