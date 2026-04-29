import { useEffect, useState } from 'react'

export default function App(){
    return (
    <div>
        <p>Hola pendejos</p>
        <TodasPersonas />
        <VerUnaPersona />
    </div>
    )
}

async function buscarPersonas() {
    
    
    let buscar = await fetch("http://localhost:3000/verPersonas")
    let datos = await buscar.json()

    console.log(datos)
}

export function TodasPersonas() {
    const [personas, setPersonas] = useState([]);

    useEffect(() => {
        async function buscarPersonas() {
            try {
                const respuesta = await fetch("http://localhost:3000/verPersonas");
                const datos = await respuesta.json();
                setPersonas(datos);
            } catch (error) {
                console.error("Error al buscar personas:", error);
            }
        }
        buscarPersonas();
    }, []); // El array vacío [] hace que solo se ejecute UNA vez al cargar.

    return (
        <div>
            <p>Personas buscadas:</p>
                {personas.map(p => (
                    <div id={p.id}>
                        <h1>{p.nombre}</h1>
                        <p>{p.edad}</p>
                    </div>
                ))}
        </div>
    );
}


export function VerUnaPersona(){
    const [unaPer, setUnaPer] = useState(null);

    useEffect(() =>{
        async function verPersona() {
            let buscar = await fetch("http://localhost:3000/1/verUnUsuario")
            let datos = await buscar.json()
            setUnaPer(datos)
        }
        verPersona()
    }, [])

    if (!unaPer) return <p>Cargando...</p>;

    return(
        <div>
            <p>{unaPer.nombre}</p>
            <p>{unaPer.edad}</p>
        </div>
    )
}