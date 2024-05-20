import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import Home from './pages/homePage';
import ErrorPage from './pages/errorPage';
import AboutMe from './pages/about/about';
import Contact from './pages/contact/contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/aboutme',
        element: <AboutMe/>
      },
      {
        path: '/contact',
        element: <Contact/>
      },
    ]
  }
])









ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);