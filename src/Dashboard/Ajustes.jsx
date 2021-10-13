import React, { useState } from 'react';

const Ajustes = () => {
    //usuario activo en ss
    const userActive = sessionStorage.getItem('userSS');
    console.log(userActive);
    //datos de todos los usuarios
    const allUsers = JSON.parse(localStorage.getItem('userLS'))['dummyUsers'];
    console.log(typeof allUsers);

    let userObj = {};
    for (const element of allUsers) {
        if (element.email === userActive) {
            userObj = element;
        }
    }
    const [nameChange, setnameChange] = useState('');
    console.log(userObj);

    return (
        <div>
            <form className='form-registro'>
                {/*<h3>Registro</h3> */}

                <div className='container-datos'>
                    {/* NOMBRE------------------------------------------------------------ */}
                    <div className='datos-container'>
                        <label htmlFor='name'>Nombre</label>
                        <input type='text' placeholder='Ingrese su nombre' value={nameChange} />
                    </div>

                    {/* CORREO------------------------------------------------------------ */}
                    <div className='datos-container'>
                        <label htmlFor='email'>Correo</label>
                        <input type='text' placeholder='Ingrese su correo' />
                    </div>

                    {/* CONTRASEÑA------------------------------------------------------------ */}
                    <div className='datos-container'>
                        <label htmlFor='password'>Contraseña</label>
                        <input type='password' placeholder='Ingrese su contraseña' />
                    </div>

                    {/* EDAD------------------------------------------------------------*/}
                    <div className='datos-container'>
                        <label htmlFor='age'>Edad</label>
                        <input type='number' min='18' max='100' placeholder='Ingrese su edad' />
                    </div>

                    {/* Ciudad------------------------------------------------------------*/}

                    <div className='datos-container'>
                        <label htmlFor='ciudad'>Ciudad</label>
                        <input type='text' placeholder='Ingrese su ciudad' />
                    </div>

                    {/* EDAD------------------------------------------------------------*/}
                    <div className='datos-container'>
                        <label htmlFor='social '>Facebook</label>
                        <input type='text' placeholder='Ingrese su red social' />
                    </div>

                    {/* ENVIAR------------------------------------------------------------ */}

                    <button className='btn-registro' type='submit'>
                        Actualizar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Ajustes;
