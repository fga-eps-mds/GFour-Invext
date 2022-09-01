import { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link, Outlet } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Sidebar.css";
import { IconContext } from "react-icons";
import { useAuth } from "../../services/Provider";
import { useNavigate } from "react-router-dom";


export const Sidebar = () => {
  const [navbar, setNavbar] = useState(false);

  const showNavbar = () => setNavbar(!navbar);

  const auth = useAuth();
  const navigate = useNavigate();

  const logout = () => {
    auth.logout(() => {
      navigate("/");
    });
  };

  return (
    <>
      <div className="container">
        <IconContext.Provider value={{ color: "#fff" }}>
          <div className="sidebar">
            <Link to="#" className="menu-bars">
              <FaIcons.FaBars className='icon-hover' onClick={showNavbar} />
            </Link>
          </div>
          <nav className={navbar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items" onClick={showNavbar}>
              <li className="sidebar-toggle">
                <Link to="#" className="menu-bars">
                  <AiIcons.AiOutlineClose className='icon-hover' />
                </Link>
              </li>
              {SidebarData.map((item, index) => {
                return item.path === "sair" ? (
                  <li key={index} className="nav-text" onClick={() => logout()}>
                    <div className="nav-link">
                      {item.icon}
                      <span>{item.title}</span>
                    </div>
                  </li>
                ) : (
                  <li key={index} className="nav-text">
                    <Link to={item.path} className="nav-link">
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
      <Outlet />
    </>
  );
};
