import { useState} from 'react'

const ListRender = () => {
    const [list] = useState(["William", "Larissa", "Raphael", "William"]);

    const [users, setUsers] = useState([
        {id: 1, name:"William", age:22},
        {id: 2, name:"Larissa", age:23},
        {id: 3, name:"Raphael", age:0.5},
    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUser) =>
        prevUser.filter((user) => randomNumber !== user.id))

        
    }
  return (
    <div>
        {/* 4 - Render sem key */}
        {/* <ul>
            {list.map((item, i) => (
                <li key={i} style={{listStyleType: "none"}}>{item}</li>
            ))}
        </ul> */}
        {/* 5 - render com key */}
        <ul>
            {users.map((user) => (
                <li key={id} style={{listStyleType: "none"}}>{user.name}, {user.age}</li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Deletar Usuário</button>
    </div>
  )
}

export default ListRender;