import React, { useState } from 'react';
import axios from 'axios'; // For making API requests
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesome for loading icon
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'; // For navigation after successful login
import './admin.css';

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // For loading spinner
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  
  const navigate = useNavigate(); // Hook to navigate to other pages

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading spinner when login is initiated
    setErrorMessage(''); // Reset error message
    setSuccessMessage(''); // Reset success message

    try {
      const response = await axios.post('http://localhost:4000/api/v2/login', {
        email,
        password,
      });

      // Assuming response.data contains the login success message or status
      setSuccessMessage('Login successful!');
      setLoading(false); // Hide the loading spinner after successful login

      // Redirect to dashboard after 1 second
      setTimeout(() => {
        navigate('/dashboard'); // Adjust '/dashboard' to your actual dashboard route
      }, 1000);

    } catch (error) {
      setLoading(false); // Hide the loading spinner if error occurs
      // Set the error message from response or a default one
      if (error.response && error.response.data.message) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage('Invalid email or password.');
      }
    }
  };

  return (
    <div className="login-overlay">
      <div className="login-container">
        <h2 className="login-container_heading">Log in with password</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <input
              type="email"
              id="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              id="password"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="remember-forgot">
            <div>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <a href="#">Forgot password?</a>
          </div>

          <button type="submit" className="login-button" disabled={loading}>
            {loading ? (
              <FontAwesomeIcon icon={faSpinner} spin />
            ) : (
              'Log in'
            )}
          </button>
        </form>

        {/* Error or Success messages */}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}

        <a href="#" className="back-options">Back to log in options</a>
      </div>
    </div>
  );
};

export default LoginComponent;
