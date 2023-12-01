import { useRef, useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('')
  const usernameRef = useRef(null)
  const passwordRef = useRef(null)

  function login(event) {
    event.preventDefault()
    const username = usernameRef.current.value
    const password = passwordRef.current.value

    if (username === import.meta.env.VITE_USERNAME &&
      password === import.meta.env.VITE_PASSWORD) {
        setMessage('Login successful')
      } else {
      setMessage('Login failed')
    }
  }

  return (
    <form onSubmit={login}>
      <h1>Login</h1>
      <label>
        Username
        <input
          type="text"
          placeholder="username"
          ref={usernameRef}
          required
          data-cy="usernameInput"
        />
      </label>

      <label>
        Password
        <input
          type="password"
          placeholder="password"
          ref={passwordRef}
          required
          data-cy="passwordInput"
        />
      </label>

      <input type="submit" value="Login" data-cy="loginButton" />

      <p>{message}</p>
    </form>
  )
}

export default App
