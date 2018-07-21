import React from 'react';
import { NavLink } from 'react-router-dom'
import '../../css/components/MenuBar.css';

const MenuBar = () => {
    return (
        <div className='menu__bar'>
            <div className='menu__bar__content container clear-fix'>
                <nav className='menu navbar-toggleable-md'>

                    <button className='navbar-toggler navbar-toggler-right collapsed' type='button' data-toggle='collapse' data-target='#navbarNav'
                        aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>

                    <div className='navbar-collapse collapse' id='navbarNav'>
                        <ul className='navbar-nav'>
                            <li className='menu__content--item nav-item'>
                                <NavLink exact to='/' className='menu__content--link nav-link' activeclassNameName="menu__content--link nav-link active">Main</NavLink>
                            </li>
                            <li className='menu__content--item nav-item'>
                                <NavLink to='/about' className='menu__content--link nav-link' activeclassNameName="menu__content--link nav-link active">About</NavLink>
                            </li>
                        </ul>
                    </div>

                </nav>
            </div>
        </div>
    );
  }

export default MenuBar;
