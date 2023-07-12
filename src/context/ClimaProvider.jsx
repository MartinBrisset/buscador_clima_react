import { createContext, useState } from "react";
import axios from 'axios';

const ClimaContext = createContext();

const ClimaProvider = ({children}) => {

    const [busqueda, setBusqueda] = useState({
        ciudad: '',
        pais: ''
    })

    const [clima, setClima] = useState({})

    const datosBusqueda = (e) => {
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    const colsultarClimaApi = async (datos) => {
        try {
            const { ciudad, pais } = datos;

            const appId = import.meta.env.VITE_API_KEY;

            const url = `https://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${appId}`;

            const { data } = await axios.get(url);

            const { lat, lon } = data[0];

            const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}&units=metric`;

            const { data: dataClima } = await axios.get(urlClima);

            setClima(dataClima);

        } catch (error) {
            console.log(error)
        }
    }


    return (
        <ClimaContext.Provider
            value={{
                busqueda,
                datosBusqueda,
                colsultarClimaApi,
                clima,
                setClima
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