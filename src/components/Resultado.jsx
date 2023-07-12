import useClima from "../hooks/useClima";

const Resultado = () => {

    const {clima, busqueda} = useClima();

    const {name, main} = clima;

  return (
    <div className="contenedor clima">
        <h2>El clima de {busqueda.ciudad} es:</h2>

        <p>
            Temperatura Actual: {main?.temp} <span> &#x2103; </span>
        </p>
        <p>
            Temperatura Mínima: {main?.temp_min} <span> &#x2103; </span>
        </p>
        <p>
            Temperatura Máxima: {main?.temp_max} <span> &#x2103; </span>
        </p>
    </div>
  )
}

export default Resultado