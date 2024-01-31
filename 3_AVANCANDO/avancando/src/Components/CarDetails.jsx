const CarDetails = ({brand, km, color}) => {
  return (
    <div>
        <h3>Detalhes do carro:</h3>
        <ul style={{listStyleType: "none"}}>
            <li>Marca: {brand}</li>
            <li>Quilometragem: {km}</li>
            <li>Cor: {color}</li>
        </ul>
    </div>
  )
}

export default CarDetails