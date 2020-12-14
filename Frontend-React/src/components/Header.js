import React from 'react'

import '../css/header.css'

import logo from '../css/images/logo.svg'
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            <div className='header__logo' title='logo'>
                <img src={logo} height='110' alt='logo'/>
            </div>

            <Link className='header__title' to='/'>
                <h1>Students4Students</h1>
            </Link>

        </header>
    );
}

export default Header