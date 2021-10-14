import React from 'react';
import './datosUser.css';
import react from '../assets/react.png';
import { withRouter } from 'react-router-dom';
import age from '../assets/age.png';
import facebook from '../assets/facebook.png';
import user from '../assets/user.png';
import email from '../assets/email.png';
import city from '../assets/city-map.png';
import setting from '../assets/settings.png';

// import dummyUsers from '../Registro/dummyUsers.json';

const DatosUser = (props) => {
    const userS = sessionStorage.getItem('userSS');
    console.log(userS);
    const userLS = JSON.parse(localStorage.getItem('userLS'))['dummyUsers'];
    console.log(userLS);

    let userCurrent = {};
    for (const usuario of userLS) {
        console.log(typeof usuario);
        if (userS === usuario.email) {
            console.log(`el usuario es ${usuario.email}`);
            userCurrent = usuario;
            console.log(userCurrent);
        }
    }

    const closeSession = (e) => {
        // e.preventDefault();
        console.log('funciona cerrar sesion');
        const userSession = e.email;
        console.log(userSession);
        sessionStorage.removeItem('userSS');
        props.history.push('/Login');
    };

    const editar = () => {
        console.log('entro a ediatr');
        props.history.push('/Ajustes');
    };
    //el usuario activo se guardo en la variable userCurrent
    console.log(typeof userCurrent);
    console.log(userCurrent);

    return (
        <div className='data-container'>
            {/* <h1 className='title-user'>Usuario activo</h1> */}

            <img className='react-img' src={react} />
            <div>
                <ul className='list-item'>
                    <div className='item-info'>
                        <img className='img' src={user} />
                        <p className='item'>{userCurrent.name}</p>
                    </div>
                    <div className='item-info'>
                        <img className='img' src={email} />
                        <p className='item'>{userCurrent.email}</p>
                    </div>
                    <div className='item-info'>
                        <img className='img' src={age} />
                        <p className='item'>{userCurrent.age}</p>
                    </div>
                    <div className='item-info'>
                        <img className='img' src={city} />
                        <p className='item'>{userCurrent.city}</p>
                    </div>
                    <div className='item-info'>
                        <img className='img' src={facebook} />
                        <p className='item'> {userCurrent.count}</p>
                    </div>
                    <button className='btn-ajustes' onClick={() => editar()}>
                        <img className='img' src={setting} />
                        <p className='item'> Ajustes</p>
                    </button>
                </ul>
                <button className='close' onClick={() => closeSession(userCurrent)}>
                    Cerrar sesión
                </button>
            </div>
        </div>
    );
};

export default withRouter(DatosUser);
