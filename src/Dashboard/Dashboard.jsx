import React from 'react';
import './dashboard.css';
import Publicaciones from './Publicaciones';
import DatosUser from './DatosUser';
import Anuncios from './Anuncios';

const Dashboard = () => {
    return (
        <>
            <div className='container-dash'>
                <DatosUser />
                <Publicaciones />
                <Anuncios />
                {/* <h2>Dashboard</h2> */}
            </div>
        </>
    );
};

export default Dashboard;
