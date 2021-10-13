import React, { useState, useEffect } from 'react';
import './publicaciones.css';
import dummyPublicacion from './dummyPublicacion.json';
import editar from '../assets/editar.png';
import x from '../assets/x-button.png';

const Publicaciones = () => {
    //todo-----------LOCAL Y SESSION OBTENER USUARIOS-----------------
    const userS = sessionStorage.getItem('userSS');
    // console.log(userS);
    const userLS = JSON.parse(localStorage.getItem('userLS'))['dummyUsers'];
    // console.log(userLS);

    let userCurrent = {};
    for (const usuario of userLS) {
        // console.log(typeof usuario);
        if (userS === usuario.email) {
            // console.log(`el usuario es ${usuario.email}`);
            userCurrent = usuario;
            // console.log(userCurrent);
        }
    }

    //todo--------------USESTATE-------------------
    const [texto, setTexto] = useState('');
    const [textos, setTextos] = useState([]);
    const [error, setError] = useState(null);

    //todo----LOCAL STORAGE SUBIR PUBLICACIONES------------------
    const setInlocalStoragePublic = (item) => {
        localStorage.setItem('userText', JSON.stringify(item));
    };

    const getUsersFromLocal = () => {
        //     // converte un string JSON a objeto;
        //     // console.log(JSON.parse(localStorage.getItem('userText')));
        return JSON.parse(localStorage.getItem('userText'))['dummyPublicacion'];
    };

    useEffect(() => {
        const userPublic = localStorage.getItem('userText');
        //     // console.log(userPublic);
        if (!userPublic) {
            //         // console.log(dummyPublicacion);
            setInlocalStoragePublic(dummyPublicacion);
        }
    }, [dummyPublicacion]);

    //todo--------------AGREGAR PUBLICACION FUNCION------

    const addPublicaciontoLS = (e) => {
        e.preventDefault();
        console.log(e);
        const TEXTO_DATABASE = getUsersFromLocal();
        const NEW_TEXTO = { name: userCurrent.name, texto: texto };
        const textoOnTheDatabase = { dummyPublicacion: [...TEXTO_DATABASE].concat(NEW_TEXTO) };
        setInlocalStoragePublic(textoOnTheDatabase);
        setTextos([...TEXTO_DATABASE, { texto: texto }]);
    };

    // console.log(textoOntheDatabase);
    return (
        <div className='container-publicaciones'>
            {/* <h1 className='title-publicacion'>¡ Bienvenido {userCurrent.name} !</h1> */}
            <ul>{/* {TEXTO_DATABASE.map(function (item) { */}</ul>
            {/* AÑADIR PUBLICACIONS */}
            <form onSubmit={addPublicaciontoLS} className='add-publicacion'>
                <input type='text' placeholder='¿Qué esta pasando?' onChange={(e) => setTexto(e.target.value)} value={texto} className='publicar' />
                <button className='enviar' type='submit'>
                    Enviar
                </button>
            </form>
            <div className='publicaciones'>
                <ul className='list'>
                    {textos.map((item) => (
                        <li className='item-container'>
                            <div className='user-text'>
                                <span className='item-text'>{item.texto}</span>
                            </div>
                            <div className='drop'>
                                <button className='btn-eliminar btn-list' type='submit'>
                                    <img className='img-edicion' src={editar} />
                                </button>
                                <button className='btn-editar btn-list' type='submit'>
                                    <img className='img-edicion' src={x} />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Publicaciones;
