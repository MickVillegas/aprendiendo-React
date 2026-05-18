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
    const [mostrar, setMostrar] = useState(false)
    let [numero, setNumero] = useState("")

    function mostrarono(x){
        setNumero(x)
        console.log("Numero guardado " + x)

        if(mostrar == true){
            setMostrar(false)
        }
        else{
            setMostrar(true)
        }
    }

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

    const [formularioCrear, setFormularioCrear] = useState(false)

function mostrarFormularioCrear(){
    if(formularioCrear == false){
        setFormularioCrear(true)
    }
    else{
        setFormularioCrear(false)
    }
}

    return (
        <div>
            <p>Personas buscadas:</p>
                {personas.map(p => (
                    <div id={p.id}>
                        <h1>{p.nombre}</h1>
                        <p>{p.edad}</p>
                        <button onClick={() => mostrarono(p.id)}>Actualizar</button>
                    </div>
                ))}
                {mostrar && <MostrarFormulario  meterId ={numero}/>}
                <br />
                <button onClick={mostrarFormularioCrear}>Crear persona</button>
                {formularioCrear && <CrearPersona />}
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

async function obtenerNumero(id){
        console.log("esto funcionará? " + id)

    let nombre = document.getElementById("nombre").value
    let edad  = document.getElementById("edad").value

    let persona = {
        nombre: nombre,
        edad: edad
    }

    try {
        let rep = await fetch("http://localhost:3000/actualizarPersona/ " + id, {
            method: "PUT",
            body: JSON.stringify(persona),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
    }
    catch(error){
        console.log(error)
    }

}

function MostrarFormulario({meterId}){
    //obtenerNumero(meterId)
    return (<div><input type='text' id = "nombre" placeholder='Nombre'></input><input type='text' id = "edad" placeholder='Edad'></input> <button onClick={()=>obtenerNumero(meterId)}>Enviar</button></div>)
}


async function subirPersona(){

    let nombre = document.getElementById("crenombre").value
    let edad  = document.getElementById("creedad").value

    let persona = {
        nombre: nombre,
        edad: edad
    }

    try {
        let rep = await fetch("http://localhost:3000/crearPersona", {
            method: "POST",
            body: JSON.stringify(persona),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
    }
    catch(error){
        console.log(error)
    }

}

function CrearPersona(){
    return (<div><input type='text' id = "crenombre" placeholder='Nombre'></input><input type='text' id = "creedad" placeholder='Edad'></input> <button onClick={() => subirPersona()}>Enviar</button></div>)
}