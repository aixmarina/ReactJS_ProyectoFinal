/**
 * Ejemplo Hooks:
 * - useState()
 * - useContext()
 */

import React, { useState, useContext } from 'react';

/**
 * 
 * @returns Componente 1
 * Dispone de un contexto que va a tener un valor
 * que revibe desde el padre
 */
const miContexto = React.createContext(null)

const Componente1 = () => {

    // Inicializamos un estado vacío que va a rellenarse con los 
    // datos del contexto del padre   

    const state = useContext(miContexto)

    return (
        <div>
            <h1>
                El token es: {state.token}
            </h1>
            {/* Pintamos el componente 2 */}
            <Componente2></Componente2>
        </div>
    );
}

const Componente2 = () => {

    const state = useContext(miContexto)

    return (
        <div>
            <h2>
                La sesión es: {state.sesion}
            </h2>
        </div>
    );
}


export default function MiComponenteConContexto() {

    const estadoInicial = {
        token: '1234567',
        sesion: 1
    }

    // creamos el estado de este componente
    const [sesionData, setsesionData] = useState(estadoInicial);

    function actualizatSesion() {
        setsesionData(
            {
                token: 'JWT123456789',
                sesion: sesionData.sesion + 1
            }
        )
    }

    return (
        <miContexto.Provider value={sesionData}>
            {/* Todo lo que esté aquí dentro puede leer los datos de sessionData */}
            {/* Además si se actualiza, los componentes de aquím también lo actualizan */}
            <h1>*** Ejemplo de useState() y useContext() ***</h1>
            <Componente1></Componente1>
            <button onClick={actualizatSesion}>Actualizar Sesión</button>
        </miContexto.Provider>
    )
}



