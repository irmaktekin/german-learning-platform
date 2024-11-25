import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisterPage.css'; // Replace with the actual path to your CSS file

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    const requestBody = {
      username: username,
      password: password,
      role: 'USER'
    };

    try {
      const response = await fetch('http://localhost:8080/register/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        console.log('Registration successful');
        navigate('/login');
      } else {
        const errorData = await response.text();
        setErrorMessage(errorData || 'Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="mainContainer">
      <div className="titleContainer">
        <h3>Register</h3>
      </div>
      <div className="inputContainer">
        <input
          type="email"
          value={username}
          placeholder="Enter your email here"
          onChange={(ev) => setUsername(ev.target.value)}
          className="inputBox"
        />
      </div>
      <div className="inputContainer">
        <input
          type="password"
          value={password}
          placeholder="Enter your password here"
          onChange={(ev) => setPassword(ev.target.value)}
          className="inputBox"
        />
      </div>
      <div className="inputContainer">
        <input
          type="password"
          value={confirmPassword}
          placeholder="Confirm your password"
          onChange={(ev) => setConfirmPassword(ev.target.value)}
          className="inputBox"
        />
      </div>
      <div className="inputContainer">
        <button className="registerButton" onClick={handleRegister}>
          Register
        </button>
      </div>
      {errorMessage && <div className="errorMessage">{errorMessage}</div>}
      <div className="loginRedirectContainer">
        <p>
          Already a member?{' '}
          <span className="loginLink" onClick={() => navigate('/login')}>
            Login now
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
