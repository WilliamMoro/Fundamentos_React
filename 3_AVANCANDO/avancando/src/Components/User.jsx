import { useState} from 'react'

const User = () => {
    const [userSystem, setUserSystem] = useState("William");
  return (
    <div>
        <p>Bem-vindo, {userSystem}!</p>
        <button onClick={() => setUserSystem("Larissa")}>Trocar Usuário</button>
    </div>
  )
}

export default User;