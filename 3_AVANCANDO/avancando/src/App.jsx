import './App.css'
import ListRender from './Components/ListRender'

// 2 - imagem em assets
import night from "./assets/night.jpg"

// 3 - useState
import User from './Components/User'
import Data from './Components/Data'


// 4 - renderização de lista
import PreviusUser from './Components/PreviusUser'

// 7 - Conditional Render
import ConditionalRender from './Components/ConditionalRender'
// 9 - props
import ShowUserName from './Components/ShowUserName'
// 10 - desestruturando dados
import CarDetails from './Components/CarDetails'

// 11 - renderização de listas com componentes
const cars = [
  {id: 1, brand:"Ferrari", color:"Amarelo", km:0},
  {id: 2, brand:"Ram", color:"Preto", km:24.358},
  {id: 3, brand:"Civic", color:"Branco", km:32.050}
]

// 12 - fragment
import {Fragment } from 'react'
import Container from './Components/Container'

// 14 - função em prop
import ExecuteFunction from './Components/ExecuteFunction'

// 15 - state lift
import { useState } from 'react'
import Message from './Components/Message'

function App() {

  // 14 - funcao em prop
  function showMessage() {
    alert("Evento do click")
  }

  // 15 - state lift
  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg)
  };

  return (
    <>
      <div className='App' style={{ paddingBottom: "500px"}}>
        <h1>Avançando em React</h1>
        {/* 1 - imagem em publick= */}
        <img src="/img.jpg" alt="Primeira imagem, usando public" />
        {/* 2 - imagem em assets */}
        <img src={night} alt="Segunda imagem importando dentro de assets" />
        {/* 3 - useState */}
        <Data />
        <User />
        {/* 4 - ListRender */}
        <PreviusUser />
        {/* 7 - Conditional Render */}
        <ConditionalRender />
        {/* 8 - props */}
        <ShowUserName name="William" saud="Boa noite"/>
        {/* 9 - desestruturando props */}
        <CarDetails brand="WV" km={127.377} color="Branco"/>
        {/* 10 - reaproveitando componentes */}
        <CarDetails brand="Fiat" km={29.573} color="Cinza"/>
        <CarDetails brand="GM" km={87.542} color="Preto"/>
        {/* 11 - renderização de lista com componente*/}
        {cars.map((car) => (
          <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km} />
        ))}
        {/* 12 - fragments */}
        <Fragment />

        {/* 13 - children */}
        {/* <Container>
          <p>Alguma coisa</p>
        </Container>
        <Container>
          <div>
            <h2>Teste:</h2>
            <p>Meu container!</p>
          </div>
        </Container> */}

        {/* 14 - funcão com props */}
        <ExecuteFunction myFunction={showMessage}/>

        {/* 15 - state lift 
        <Message msg={message} />
        <ChangeMessage handleMessage={handleMessage}/>*/}
        

      </div>

    </>
  );
}

export default App
