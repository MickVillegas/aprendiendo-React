import { useState } from 'react'

function Palabra() {
  return <p>¡Hola! Aparecí porque pulsaste el botón.</p>
}


export default function App() {

  const [mostrar, setMostrar] = useState(false)

  function manejarClick() {
  
    if(mostrar == true){
      setMostrar(false)
    }
    else{
      setMostrar(true)
    }
    console.log("Cambiando estado...")
  }

  return (
    <div>
      <h1>¡Hola Mundo!</h1>
      <p>Este es mi primer componente en React.</p>
      <h1>Me gusta el pan</h1>

      <App2 /> {/*ejemplo llamada a ccomponentes*/}

      <Numero x={7} /> {/*ejemplo parametros*/}

      <button onClick={manejarClick}>Pulsar</button>
      {mostrar && <Palabra />}
    </div>
    
  )
}

{/*ejemplo llamada a ccomponentes*/}
export function App2() {
  let nombre = "Mick"
  return (
    <div>
      <h1>{nombre} esto no es una web</h1>
    </div>
  )
}

{/*ejemplo parametros*/}
export function Numero({x}) {
  const listaDeParrafos = [];

  for (let i = 0; i <= x; i++) {
    // Empujamos etiquetas JSX al array
    listaDeParrafos.push(<p key={i}>{i}</p>);
  }

  return (
    <div>
      {listaDeParrafos}
    </div>
  )
}

//export default App
//export default App2 