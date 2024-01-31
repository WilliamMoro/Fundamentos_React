import { useState} from 'react'

const PreviusUser = () => {
    const [Users, setUserPrevius] = useState([
        {id: 1, name:"William", age: 22, work: "Dev"},
        {id: 2, name:"Larissa", age: 23, work: "Sócia Gerencial"},
        {id: 3, name:"Raphael", age: 0.5, work: "Estudante"},
        {id: 4, name:"Fernanda", age: 27, work: "Secretária"},
        {id: 5, name:"Helena", age: 69, work: "Aposentada"},
    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 6);

        setUserPrevius((prevUsers) => 
        prevUsers.filter((user) => randomNumber !== user.id))
    };
  return (
    <div>
        <ul>
            {Users.map((user) => (
                <li key={user.id} style={{listStyleType: "none"}}>{user.name} - {user.age} - {user.work}</li>
            ))}
        </ul>
        {/* 6 - previus  */}
        <button onClick={deleteRandom}>Delete Random</button>
    </div>
  )
}

export default PreviusUser