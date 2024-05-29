import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import Home from './pages/homePage';
import ErrorPage from './pages/errorPage';
import AboutMe from './pages/about/about';
import Contact from './pages/contact/contact';
import ProjectsPage from './pages/projects/projects';

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
      {
        path: '/projects',
        element: <ProjectsPage/>
      },
    ]
  }
])









ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);