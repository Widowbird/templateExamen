// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import Card from './Card';

const Form = () => {

    const [estudiante,setEstudiante] = useState({
        nombre:"",
        asignatura:""
    })

    const [card,setcard]=useState(false);
    const [error,setError] = useState(false);

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(estudiante.nombre.length>=3 && estudiante.nombre.startsWith(" ")==false && estudiante.asignatura.length>=6){
            setcard(true);
        }else{
            setError(true)
        }
    }
return (
    <div>
        {card?<Card nombre={estudiante.nombre} asignatura = {estudiante.asignatura}/> :
        <><h2>Bienvenido, elige tu asignatura</h2><form onSubmit={handleSubmit}>
                <title>Bienvenido, ellige tu asignatura</title>
                <label htmlFor="">Nombre Completo</label>
                <input type="text" onChange={(e) => setEstudiante({ ...estudiante, nombre: e.target.value })} />
                <label htmlFor="">Asignatura</label>
                <input type="text" onChange={(e) => setEstudiante({ ...estudiante, asignatura: e.target.value })} />
                <button>Enviar</button>
                {error ? (<h4 style={{ color: "red" }}>Coloque la información correcta</h4>) : null}
            </form></>
        }
    </div>
)
}

export default Form