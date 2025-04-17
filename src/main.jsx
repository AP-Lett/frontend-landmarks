// import React from 'react';
// import './index.css'
// import App from './App.jsx'
// import Contact from './Contact.jsx';
// import About from './About.jsx';
// import ReactDOM from 'react-dom/client';
// import {
//   createBrowserRouter,
//   RouterProvider
// } from 'react-router-dom';
// import { LandmarksPage } from './LandmarksPage.jsx';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/",
//         element: <LandmarksPage />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ]);

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { AuthProvider } from './context/AuthContext';
import './index.css'
import App from './App.jsx'
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage';
import AboutPage from './pages/AboutPage';
import ProtectedRoute from './components/ProtectedRoute'; 
import { LandmarksPage } from './LandmarksPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Main layout
    children: [
      // Public Routes
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "signup", element: <SignupPage /> },
      { path: "contact", element: <ContactPage />},
      // Protected Routes Area
      {
        element: <ProtectedRoute />,
        children: [
          { path: "dashboard", element: <DashboardPage /> },
          { path: "landmarks", element: <LandmarksPage /> },
        ],
      },

      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

