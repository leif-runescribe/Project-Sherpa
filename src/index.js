import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './pages/Landing';
import Technology from './pages/Technology';
import Team from './pages/Team';
import Contact from './components/Contact';

import QRCodeExample from './components/AppleQRCode';
import AppleInfo from './components/AppleInfo';
import Join from './pages/Join';
import SignIn from './pages/SignIn';
import Techno from './components/Tech';
import Dash from './pages/Dash';
import BusinessModel from './pages/BusinessModel';
import ContactUs from './pages/ContactUs';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing/>,
  },
  {
    path: "/technology",
    element: <Techno/>,
  },
  {
    path: "/about",
    element: <Team/>,
  },
  {
    path:"/contact",
    element:<ContactUs/>

  },
 
  {
    path:"/qr",
    element: <QRCodeExample/>
  },
  {
    path:"/apple/:id",
    element: <AppleInfo/>
  },
  {
    path:"/join",
    element:<Join/>
  },
  {
    path:"/signin",
    element:<SignIn/>
  },
  {
    path:"/user/dashboard",
    element: <Dash/>
  },
  {
    path:"/businessmodel",
    element: <BusinessModel/>
  }
  
  
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}><App /></RouterProvider>
  </React.StrictMode>
);

