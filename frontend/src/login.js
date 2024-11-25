import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './LoginPage.css'; // Replace with the actual path to your CSS file

const Login = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate()

  const onButtonClick = async() => {
    // Create the login request payload
      const requestBody = {
        username: username,
        password: password,
      };
       try {
       console.log(password);
          const response =  await fetch('http://localhost:8080/authenticate', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
          });

          if (response.ok) {
            const data =  await response.json();
            // Assuming the backend returns a token
            const token = data.token;
            console.log('Login successful. Token:', token);

            // Store the token in localStorage/sessionStorage or state (for persistence)
            localStorage.setItem('authToken', token);

            // Navigate to the home page or any other protected page
            navigate('/Home');
          } else {
            const errorData =  response.text();
            setErrorMessage(errorData || 'Login failed. Please try again.');
          }
        } catch (error) {
          console.error('Error during login:', error);
          setErrorMessage('An error occurred. Please try again later.');
        }
  }

  return (
    <div className="mainContainer">
    <div className = "titleContainer">
      <h3>Login </h3>
    </div>
        <div className="inputContainer">
          <input
            type="email"
            value={username}
            placeholder="Enter your email here"
            onChange={(ev) => setUsername(ev.target.value)}
            className="inputBox"
          />
          <label className="errorLabel">{emailError}</label>
        </div>
        <div className="inputContainer">
          <input
            type="password"
            value={password}
            placeholder="Enter your password here"
            onChange={(ev) => setPassword(ev.target.value)}
            className="inputBox"
          />
          <label className="errorLabel">{passwordError}</label>
        </div>
        <br />
        <div className="inputContainer">
          <button className="loginButton" onClick={onButtonClick}>
            Login
          </button>
        </div>
        {errorMessage && <div className="errorMessage">{errorMessage}</div>}
        <div className="checkboxContainer">
    <input
      type="checkbox"
      id="rememberMe"
      onChange={(e) => console.log('Remember Me:', e.target.checked)} 
    />
    <label htmlFor="rememberMe" className="checkboxLabel">
      Remember Me
    </label>
  </div>
        <div className="signupContainer">
    <p>
      Not a member?{' '}
          <span className="signupLink" onClick={() => navigate('/register')}>
        Sign up now
      </span>
    </p>
        
      </div>
      </div>
  );
};

export default Login