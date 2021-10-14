import React from 'react';
import './dashboard.css';
import Publicaciones from './Publicaciones';
import DatosUser from './DatosUser';
import Anuncios from './Anuncios/Anuncios';

const Dashboard = () => {
    return (
        <>
            <div className='container-dash'>
                <DatosUser className='datos' />
                <Publicaciones className='publicaciones' />
                <Anuncios className='anuncios' />
            </div>
        </>
    );
};

export default Dashboard;
