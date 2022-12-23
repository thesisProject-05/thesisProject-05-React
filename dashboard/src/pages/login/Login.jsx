import React from 'react';
import "./login.scss";
const Login = () => {

  return (
    <div class="container">
    <div class="form">
      <form action="#" class="login-form">
        Admin login
        <input type="text" name="username" placeholder="Username"/>
        <input type="text" name="password" placeholder="Password"/>
        <button type="submit" class="btn">Login</button>
        
    </form>
      
    </div>
  </div>
  )
}

export default Login