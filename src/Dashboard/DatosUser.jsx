import React from 'react';
import './datosUser.css';
import react from '../assets/react.png';

const DatosUser = () => {
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

    //el usuario activo se guardo en la variable userCurrent
    console.log(typeof userCurrent);
    console.log(userCurrent);

    return (
        <div className='data-container'>
            {/* <h1 className='title-user'>Usuario activo</h1> */}
            <div className='img-container'>
                <img className='react-img' src={react} />
            </div>
            <ul className='list-item'>
                <p className='item'>Nombre: {userCurrent.name}</p>
                <p className='item'>Correo: {userCurrent.email}</p>
                <p className='item'>Edad: {userCurrent.age}</p>
                <p className='item'>Ciudad: {userCurrent.city}</p>
                <p className='item'>Facebook: {userCurrent.count}</p>
            </ul>
            <button className='close'>Cerrar sesión</button>
        </div>
    );
};

export default DatosUser;
