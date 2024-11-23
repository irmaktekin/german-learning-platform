import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate()

  const onButtonClick = () => {
    // Create the login request payload
      const requestBody = {
        email: email,
        password: password,
      };
       try {
          const response =  fetch('localhost:8080/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
          });
          if (response.ok) {
            const data =  response.json();
            // Assuming the backend returns a token
            const token = data.token;
            console.log('Login successful. Token:', token);

            // Store the token in localStorage/sessionStorage or state (for persistence)
            localStorage.setItem('authToken', token);

            // Navigate to the home page or any other protected page
            navigate('/home');
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
    <div className={'mainContainer'}>
      <div className={'titleContainer'}>
        <div>Login</div>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={email}
          placeholder="Enter your email here"
          onChange={(ev) => setEmail(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{emailError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={password}
          placeholder="Enter your password here"
          onChange={(ev) => setPassword(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Log in'} />
      </div>
    </div>
  )
}

export default Login