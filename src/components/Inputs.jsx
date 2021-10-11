import React from 'react';
import '../Registro/registro.css';

const Inputs = ({ label, placeholder, tipo, estado, cambiarEstado, errores }) => {
    const cambio = (e) => {
        cambiarEstado(e.target.value);
    };

    return (
        <div className='datos-container'>
            <label htmlFor='nombre'>{label}</label>
            <input type={tipo} placeholder={placeholder} onChange={cambio} value={estado} required />
            <span className='text-danger'>{errores}</span>
        </div>
    );
};

export default Inputs;

// onKeyUp={validacion} onBlur={validacion}
/* const validacion = () => {
        if (expresionRegular) {
            if (expresionRegular.test(estado.campo)) {
            } else {
                console.log('incorrecto');
            }
        } 
    };*/
// onKeyUp={validacion}

/* onBlur={validacion} */
