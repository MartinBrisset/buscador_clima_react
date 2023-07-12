import useClima from "../hooks/useClima"
import Formulario from "./Formulario"
import Resultado from "./Resultado"

const AppClima = () => {

  const {clima} = useClima();

  return (
    <>
        <main className="dos-columnas">
            <Formulario />

            {
              clima?.name && <Resultado />
            }

        </main>
    </>
  )
}

export default AppClima