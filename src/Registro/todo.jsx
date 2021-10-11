import React, { useState } from 'react';
import Inputs from '../components/Inputs';
import './registro.css';

const Otro = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [age, setAge] = useState();
    // const [date, setDate] = useState('');
    // const [error, setError] = useState(null);
    const [users, setUsers] = useState([]);

    /* const expresiones = {
        usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        password: /^.{4,12}$/, // 4 a 12 digitos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/, // 7 a 14 numeros.
    }; */
    const procesarDatos = (e) => {
        e.preventDefault();

        setName('');
        setEmail('');
        setPassword('');
        setAge({ Number });

        setUsers([...users, { nameUser: name, emailUser: email, passUser: password, ageUser: age }]);
    };
    // localStorage.setItem('userLS', JSON.stringify(setUser));
    // setUser([...user, { nameUser: name }]);
    const localStorageUser = (item) => {
        localStorage.setItem('userLS', JSON.stringify(item));
    };
    localStorageUser(users);

    // localStorage.setItem('nombre', name);
    return (
        <>
            <div className='container'>
                <form className='form-registro' onSubmit={procesarDatos}>
                    {/* <h3>Registro</h3> */}
                    <div className='container-datos'>
                        {/* NOMBRE------------------------------------------------------------ */}

                        <Inputs
                            label='Nombre'
                            placeholder='Ingrese su nombre'
                            tipo='text'
                            cambiarEstado={setName}
                            estado={name}
                            errores='El nombre debe contener solo letras y espacios'
                        />
                        {/* CORREO------------------------------------------------------------ */}

                        <Inputs
                            label='Correo'
                            placeholder='Ingrese su correo'
                            tipo='email'
                            cambiarEstado={setEmail}
                            estado={email}
                            errores='Correo no debe contener espacioss'
                        />

                        {/* CONTRASEÑA------------------------------------------------------------ */}

                        <Inputs
                            label='Password'
                            placeholder='Ingrese su contraseña'
                            tipo='password'
                            cambiarEstado={setPassword}
                            estado={password}
                            errores='Contraseña no debe contener espacios'
                        />

                        {/* EDAD------------------------------------------------------------*/}

                        <Inputs
                            label='Edad'
                            placeholder='Ingrese su edad'
                            tipo='number'
                            cambiarEstado={setAge}
                            estado={age}
                            errores='Ingresar solo numeros'
                            // expresionRegular={expresiones.nombre}
                        />

                        {/* CUMPLEAÑOS------------------------------------------------------------*/}

                        {/* <Inputs
                            label='Cumpleaños'
                            placeholder='Ingrese su fecha de cumpleaños'
                            tipo='date'
                            cambiarEstado={setDate}
                            estado={date}
                            errores='Correo no debe contener espacioss'
                            // expresiones={expresiones.nombre}
                        /> */}

                        {/* ENVIAR------------------------------------------------------------ */}
                        <button className='btn-registro' type='submit'>
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Otro;
