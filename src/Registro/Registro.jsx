import React, { useState, useEffect } from 'react';
import './registro.css';
import { useHistory } from 'react-router';
import dummyUsers from './dummyUsers.json';

const Registro = () => {
    const route = useHistory();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState('');
    const [city, setCity] = useState('');
    const [count, setCount] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [showNotification, setShowNotification] = useState(false);

    //todo--------DISIABLE

    const disableButton = () => {
        if (loading) {
            return true;
        }
        if (name === '') {
            return true;
        }
        if (email === '') {
            return true;
        }
        if (password === '') {
            return true;
        }
        if (age === '') {
            return true;
        }
        if (city === '') {
            return true;
        }
        if (count === '') {
            return true;
        }
        return false;
    };

    //todo------ LOCAL STORAGE-----------------
    //enviarlo al localStorage como un string;
    const setInlocalStorageUser = (item) => {
        localStorage.setItem('userLS', JSON.stringify(item));
    };

    const getUsersFromLocal = () => {
        // converte un string JSON a objeto;
        console.log(JSON.parse(localStorage.getItem('userLS')));
        return JSON.parse(localStorage.getItem('userLS'))['dummyUsers'];
    };

    useEffect(() => {
        const users = localStorage.getItem('userLS');
        // console.log(users);
        if (!users) {
            console.log(dummyUsers);
            setInlocalStorageUser(dummyUsers);
        }
    }, [dummyUsers]);

    //todo----SHOW NOTIFICATION----------
    const showNotificationFunc = () => {
        setShowNotification(true);
        setTimeout(() => {
            setShowNotification(false);
        }, 3000);
    };

    //todo----- PROCESAR DATOS----------
    const procesarDatos = (e) => {
        e.preventDefault();
        //?------VALIDAR-------
        if (!name.trim()) {
            console.log('ingresa tu nombre');
            setError('Ingresa tu nombre');
            return;
        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(name)) {
            setError('El nombre solo puede contener letras y espacios');
            return;
        }

        //? ----------------CORREO---------
        if (!email.trim()) {
            console.log('ingresa tu nombre');
            setError('Ingresa un correo valido');
            return;
        } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email)) {
            setError('El correo no puede contener espacios');
            return;
        }

        //?-------- CONTRASEÑA---------------
        if (!password.trim()) {
            console.log('ingresa tu contraseña');
            setError('Ingresa tu contraseña');
            return;
        } else if (!/^.{4,12}$/.test(password)) {
            setError('La contraseña debe contener de 4 a 12 digitos');
            return;
        }
        setError('');
        /* setError(null);
        setName('');
        setEmail('');
        setPassword('');
        setAge({ Number });
 */
        setLoading(true);
        setTimeout(() => {
            const USERS_DATABASE = getUsersFromLocal();
            const NEW_USER = { name: name, email: email, password: password, age: age, city: city, count: count };
            const usersOnTheDatabase = { dummyUsers: [...USERS_DATABASE].concat(NEW_USER) };

            setInlocalStorageUser(usersOnTheDatabase);
            setLoading(false);
            setName('');
            setEmail('');
            setPassword('');
            setAge('');
            setCity('');
            setCount('');
            showNotificationFunc();
        }, 3000);
    };

    return (
        <>
            <div className='container'>
                <h3 className='title-registro'>Registro</h3>
                {error && <div className='text-error'>{error}</div>}

                <form className='form-registro' onSubmit={procesarDatos}>
                    {/*<h3>Registro</h3> */}

                    <div className='container-datos'>
                        {/* NOMBRE------------------------------------------------------------ */}
                        <div className='datos-container'>
                            <label htmlFor='name'>Nombre</label>
                            <input type='text' placeholder='Ingrese su nombre' onChange={(e) => setName(e.target.value)} value={name} />
                        </div>

                        {/* CORREO------------------------------------------------------------ */}
                        <div className='datos-container'>
                            <label htmlFor='email'>Correo</label>
                            <input type='text' placeholder='Ingrese su correo' onChange={(e) => setEmail(e.target.value)} value={email} />
                        </div>

                        {/* CONTRASEÑA------------------------------------------------------------ */}
                        <div className='datos-container'>
                            <label htmlFor='password'>Contraseña</label>
                            <input
                                type='password'
                                placeholder='Ingrese su contraseña'
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                            />
                        </div>

                        {/* EDAD------------------------------------------------------------*/}
                        <div className='datos-container'>
                            <label htmlFor='age'>Edad</label>
                            <input
                                type='number'
                                min='18'
                                max='100'
                                placeholder='Ingrese su edad'
                                onChange={(e) => setAge(e.target.value)}
                                value={age}
                            />
                        </div>

                        {/* EDAD------------------------------------------------------------*/}

                        <div className='datos-container'>
                            <label htmlFor='ciudad'>Ciudad</label>
                            <input type='text' placeholder='Ingrese su ciudad' onChange={(e) => setCity(e.target.value)} value={city} />
                        </div>

                        {/* EDAD------------------------------------------------------------*/}
                        <div className='datos-container'>
                            <label htmlFor='social '>Red social</label>
                            <input type='text' placeholder='Ingrese su red social' onChange={(e) => setCount(e.target.value)} value={count} />
                        </div>

                        {/* ENVIAR------------------------------------------------------------ */}

                        <button disabled={disableButton()} className='btn-registro' type='submit'>
                            Enviar
                        </button>
                    </div>
                </form>
                {loading && <div className='loading'>Loading...</div>}
                {showNotification && <div style={{ color: 'green' }}>Su usuario ha sido registrado exitosamente!</div>}
            </div>
        </>
    );
};

export default Registro;
