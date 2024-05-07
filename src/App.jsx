import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  
  const [users, setUser] = useState([]);


  useEffect(() =>{
    axios.get('http://localhost:3100/get')
    .then(users => setUser(users.data))
    .catch(err => console.log(err))
  }, [])


  return (
    <>
      <table>
        <tr>
          <th>Name: </th>
          <th>Email: </th>
        </tr>
         {users.map(user => (
            <tr key={user.id}> 
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
          
      </table>
        
    </>
  )
}

export default App
