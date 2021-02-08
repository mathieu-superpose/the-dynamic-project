import React from "react";
import { Link } from 'react-router-dom';
import './src/Nav.scss';

import logo from './src/img/dynamic_logo.svg';

const Nav = () => {
  return (
    <nav className='nav'>
    	<div className='nav__dynamic-logo'>
          <Link className='nav__dynamic-logo__link' to="/">
        	<img className='nav__dynamic-logo__link__image' src={logo} />
            <h3 className='nav__dynamic-logo__link__title' >The Dynamic Project</h3>
          </Link>
            </div>
    	<ul className='nav__list'>
        <Link to="/about">
    		<li className='nav__list__about'>About</li>
        </Link>
        <Link to="/shop">
    		<li className='nav__list__shop'>Shop</li>
        </Link>
    	</ul>
    </nav>
  );
}

export default Nav;
