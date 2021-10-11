import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <Link className='auth' to='/'>
                {/*lleva a la página de inicio */}
                HELLO
            </Link>
            <div className='link'>
                <div className='link-container'>
                    <NavLink to='/' exact className='nav-item'>
                        Inicio
                    </NavLink>
                    <NavLink to='/registro' className='nav-item'>
                        Registrarse
                    </NavLink>
                    <NavLink to='/login' className='nav-item'>
                        iniciar sesión
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
//navlink es para colocar la clase active
