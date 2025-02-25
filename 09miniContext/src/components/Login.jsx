import React, { useState } from 'react'
import USerContext from '../context/UserContext'
function Login() {
    const [username, setUsername] = useState('')
    const [Password, setPassword] = useState(second)

    const handleSubmit = () => {

    }
  return (
    <div>
    <h2>Login</h2>
    <input type="text" placeholder='username' />
    <input type="text" placeholder='password' />
    <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login