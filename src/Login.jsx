import { useState } from 'react';
import './Login.css';

export default function Login({ onSwitchToRegistration }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    if (!email.includes('@')) {
      setError('Please enter a valid email');
      return;
    }

    setIsLoading(true);
    // Simulate login request
    setTimeout(() => {
      console.log('Login attempt:', { email, password });
      setIsLoading(false);
      // You can replace this with actual API call later
      alert(`Welcome ${email}!`);
      setEmail('');
      setPassword('');
    }, 1000);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>LingoLearn</h1>
        <p className="subtitle">Sign in to your account</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              disabled={isLoading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              disabled={isLoading}
            />
          </div>

          {error && <p className="error-message">{error}</p>}

          <button 
            type="submit" 
            className="login-button"
            disabled={isLoading}
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <p className="signup-prompt">
          Don't have an account? <a href="#" onClick={(e) => { e.preventDefault(); onSwitchToRegistration(); }}>Sign up</a>
        </p>
      </div>
    </div>
  );
}
