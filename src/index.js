import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './pages/Landing';
import Technology from './pages/Technology';
import Team from './pages/Team';
import Contact from './components/Contact';
import ContactUs from './pages/ContactUs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing/>,
  },
  {
    path: "/technology",
    element: <Technology/>,
  },
  {
    path: "/about",
    element: <Team/>,
  },
  {
    path:"/contact",
    element:<Contact/>

  }
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}><App /></RouterProvider>
  </React.StrictMode>
);

