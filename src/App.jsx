import { useState, useEffect } from 'react'
import AllUsers from './AllUsers.jsx'
import Singleuser from './Singleuser'
import './App.css'

function App() {
  const [users, setUsers] = useState([])
  const [hash, setHash] = useState(window.location.hash.slice(1))

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch ("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users")
      const data = await response.json()
      setUsers(data)
      
    }
    fetchUsers()
  }, [])

  useEffect (() => {
    window.addEventListener("hashchange", () => {
      setHash(window.location.hash.slice(1)*1)
    })

  }, [])

const user = users.find((user) => {
  return hash === user.id
})


  return (
<div>
  {console.log(hash)}
  <h1>Contact List ({users.length})</h1>
  {user ? (<Singleuser user={user}/>) : null}
  <AllUsers users={users} hash={hash}  />
</div>
  )
}

export default App
