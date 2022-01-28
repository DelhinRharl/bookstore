import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const Navigation = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Books',
    },
    {
      id: 2,
      path: '/Categories',
      text: 'Categories',
    },
  ];

  return (
    <header className="header">
      <nav>
        <h2>Bookstore CMS</h2>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <NavLink to={link.path}>
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className='user-circle'>
        <FaUserCircle/>
      </div>
    </header>
  );
};

export default Navigation;
