import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <NavLink to="/" className="logo-link">
            Maksuda Islam
          </NavLink>
        </div>
        <nav className="nav">
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            end
          >
            Home
          </NavLink>
          <NavLink 
            to="/academia" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Academia
          </NavLink>
          <NavLink 
            to="/professional" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Work Experience
          </NavLink>
          <NavLink 
            to="/projects" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Projects
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;