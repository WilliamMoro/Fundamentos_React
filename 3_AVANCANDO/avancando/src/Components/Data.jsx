import { useState} from 'react'

const Data = () => {
    let SomeData = 10;

    const [anotherNumber, setAnotherNumber] = useState(15);
  return (
    <div>
        <div>
            <p>Valor: {SomeData}</p>
            <button onClick={() => (SomeData = 15)}>Mudar Variável</button>
        </div>
        <div>
            <p>Valor: {anotherNumber}</p>
            <button onClick={() => setAnotherNumber(20)}>Mudar Variável</button>
            <button onClick={() => setAnotherNumber(10)}>Voltar ao original</button>
        </div>
    </div>
  );
}

export default Data;