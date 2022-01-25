import React from 'react';
import { NavLink } from 'react-router-dom';

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
    <header>
      <nav>
        <h2>Bookstore CMS</h2>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <NavLink to={link.path} exact>
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
