import React from 'react'
import Header from './Header'
import './LoginPage.css'

const LoginPage = () => {
  return (
    <div className="login-container">
      <form>
        <label for="username">Username:</label>
        <input type="text" id="username" name="username"/>
        <br/>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password"/>
        <br/>
        <button type="submit" className="login-button">Login</button>
    </form>
    </div>
  )
}

export default LoginPage
