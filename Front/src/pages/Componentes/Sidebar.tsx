import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { SidebarData } from './SidebarData';



function Sidebar() {
    const [currImg, setCurrImg] = useState(0);

    return (
    <>
      <div className = 'sidebar'>
        <Link to = "#" className = 'menu-bars'>
          <FaIcons.FaBars/>
        </Link>
      </div>
    </>
  );
}

export default Sidebar;