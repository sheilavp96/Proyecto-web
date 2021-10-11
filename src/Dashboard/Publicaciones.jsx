import React, { useState } from 'react';
import './publicaciones.css';

const Publicaciones = () => {
    //todo-----------LOCAL Y SESSION-----------------
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

    //todo--------------USESTATE-------------------
    const [texto, setTexto] = useState('');

    //todo--------------AGREGAR PUBLICACION FUNCION------
    const addPublicacion = (e) => {
        console.log();
    };

    return (
        <div className='container-publicaciones'>
            {/* <h1 className='title-publicacion'>¡ Bienvenido {userCurrent.name} !</h1> */}

            {/* AÑADIR PUBLICACIONS */}
            <form onSubmit={addPublicacion} className='add-publicacion'>
                <input type='text' placeholder='¿Qué esta pasando?' onChange={(e) => setTexto(e.target.value)} value={texto} className='publicar' />
                <button className='enviar' type='submit'>
                    Enviar
                </button>
            </form>
            <div className='publicaciones'>Donde se veran todas las publicaciones</div>
        </div>
    );
};

export default Publicaciones;
