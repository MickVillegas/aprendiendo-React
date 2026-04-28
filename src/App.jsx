import { useState } from 'react'

function Palabra() {
  return <p>¡Hola! Aparecí porque pulsaste el botón.</p>
}

//usado en sumar y restar numero
function MostrarNumero({ x }){
  return <p>{x}</p>
}

//usado en coger el valor de un imput y añadirlo a un parrafo
function PonerPalabra({ palabra }){
  return <p>Has escrito la palabra {palabra}</p>
}

export default function App() {

  {/*LOGICA let [nombre variable, sunfion set] = useState(tipo de dato string, int, booleano, etc)*/}
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

  {/*ejemplo suma y resta*/}
  let [num, setNum] = useState(0)

  function suma(){
    setNum(num += 1)
  }

  function resta(){
    setNum(num -= 1)
  }

  {/*ejemplo obtener valor imput y ponerlo en un texto*/}
  let [pal, setPal] = useState("ninguno")

  function cogerInput() {
    setPal(document.getElementById("Palabra").value)      
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

      {/*ejemplo suma y resta*/}

      <button onClick={suma}>Sumar numero</button>
      <button onClick={resta}>Restar numero</button>
      {<MostrarNumero x={num} />}

      {/*ejemplo obtener valor imput y ponerlo en un texto*/}
      <input type="text" name="" id="Palabra" />

      <button onClick={cogerInput}>Poner Palabra</button>
      {<PonerPalabra palabra={pal} />}

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