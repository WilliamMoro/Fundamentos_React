import React from 'react'

const ShowUserName = (props) => { //aqui passo props como um armento que espera ser recebido da função
  return (
    <div>
        <h2>O nome do usuário é: {props.name}, {props.saud}</h2>
    </div>
  )
}

export default ShowUserName