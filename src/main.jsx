import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Profile from './pages/user/Profile.jsx'
import Home from './pages/Home.jsx'

import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute.jsx'
import { UserContext, UserContextProvider } from './context/userAuthContext.jsx'
import axios from 'axios'
axios.defaults.withCredentials = true;


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // This could include Navigation or other shared layout items
    children: [
      { index: true, element: <Home /> },
      { path: 'profile', element: <PrivateRoute><Profile /></PrivateRoute> },
    ],
  },
  { path: '/login', element: <Login /> }, // No layout, just the component
  { path: '/register', element: <Register /> }, // No layout, just the component
]);

createRoot(document.getElementById('root')).render(
    
<UserContextProvider>

  <RouterProvider router={router}></RouterProvider>
</UserContextProvider>
    
)
