import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import './styles/global.css'

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Menu from './components/menu/Menu';
import Navbar from './components/navbar/Navbar';
import { useState } from 'react';

import Students from './pages/Students';
import Teachers from './pages/Teachers';

function App() {
  const Layout = () => {

    const [selectedPage, setSelectedPage] = useState('Dashboard');
    const [titlestats, setTitleStats] = useState(null);

    const handlePageChange = (pageName) => {
      setSelectedPage(pageName);
    };

    return (

     <div className="main">     
          <div className="menuContainer">
            <Menu handlePageChange={handlePageChange}/>
          </div>
          <div className="contentContainer"> 
              <Navbar title={selectedPage} titlestats={titlestats}/>   
              <div className="content">       
                <Outlet />           
              </div>
          </div>
      
      </div>

    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/students",
          element: <Students />,
        },
        {
          path: "/teachers",
          element: <Teachers />,
        },

      ],
    },

  ]);

  return (

  <RouterProvider router={router} />
 );
}

export default App;

