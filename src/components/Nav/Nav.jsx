import React from "react";

import './src/Nav.scss';

import logo from './src/img/dynamic_logo.svg';

const Nav = () => {
  return (
    <nav className='nav'>
    	<div className='nav__dynamic-logo'>
        	<img className='nav__dynamic-logo__image' src={logo} />
            <h3 className='nav__dynamic-logo__title' >The Dynamic Project</h3>
            </div>
    	<ul className='nav__list'>
    		<li className='nav__list__about'>About</li>
    		<li className='nav__list__shop'>Shop</li>
    	</ul>
    </nav>
  );
}

export default Nav;
