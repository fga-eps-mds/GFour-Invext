import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { SidebarData } from './SidebarData';



function Sidebar() {
    const [currImg, setCurrImg] = useState(0);
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => (!sidebar);
    return (
      <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
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
    </>
  );
}

export default Sidebar;