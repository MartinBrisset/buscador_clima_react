import { createContext, useState } from "react";

const ClimaContext = createContext();

const ClimaProvider = ({children}) => {

    const [busqueda, setBusqueda] = useState({
        ciudad: '',
        pais: ''
    })

    const datosBusqueda = (e) => {
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    const colsultarClimaApi = (datos) => {

    }


    return (
        <ClimaContext.Provider
            value={{
                busqueda,
                datosBusqueda,
                colsultarClimaApi
            }}
        >
            {children}
        </ClimaContext.Provider>
    )
}

export { 
    ClimaProvider
};

export default ClimaContext;