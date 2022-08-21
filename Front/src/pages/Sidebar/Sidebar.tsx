import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link, Outlet } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Sidebar.css'
import { IconContext } from 'react-icons';


export const Sidebar = () => {
    const [navbar, setNavbar] = useState(false);

    const showNavbar = () => setNavbar(!navbar);

    return (
      <>
      <div className="container">

      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='sidebar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showNavbar} />
          </Link>
        </div>
        <nav className={navbar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showNavbar}>
            <li className='sidebar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className='nav-text'>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
      </div>
      <Outlet/>
    </>
  );
}