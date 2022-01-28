import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const Navigation = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'BOOKS',
    },
    {
      id: 2,
      path: '/Categories',
      text: 'CATEGORIES',
    },
  ];

  return (
    <header className="header">
      <nav>
        <h2>Bookstore CMS</h2>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <NavLink to={link.path} className="navlink">
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="user-circle">
        <FaUser />
      </div>
    </header>
  );
};

export default Navigation;
