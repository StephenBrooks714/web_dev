import React from 'react';
import ReactDOM from 'react-dom/client';
// styles
import "./styles/main.css";
// pages
import App from './App';
import ErrorPage from './error-page.jsx';
import Login from './pages/Login.jsx';
import Courses from './pages/Courses.jsx';
import { AuthProvider } from '@descope/react-sdk';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage />,
    },
    {
        path: "/courses",
        element: <Courses/>,
        errorElement: <ErrorPage />,
    },
    {
        path: "/login",
        element: <Login/>,
        errorElement: <ErrorPage />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AuthProvider
            projectId='P2hwIdyL38KIgwdClKN9PiPfzF9g'
        >
            <RouterProvider router={router} />
        </AuthProvider>
    </React.StrictMode>
);