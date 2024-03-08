import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import Root from './root';
import Login from './login';
import App from './App';
import NotFound from './notFound';
import Logout from './logout'
import Acerca from './acerca'
import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <NotFound/>
    },
    {
      path: '/login',
      element: <Login/>
    },
    {
      path: '/app',
      element: <App />
    },
    {
      path: '/logout',
      element: <Logout />
    },
    {
      path: '/acerca',
      element: <Acerca/>
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
)

