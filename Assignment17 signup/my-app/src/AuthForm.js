import React, { useState } from 'react';

function AuthForm({ onAuth }) {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock validation
    if (!username || !password) {
      alert("Please fill all fields");
      return;
    }

    if (isLogin) {
      // Fake login
      onAuth({ username });
    } else {
      // Fake signup
      alert("Signup successful! You can now log in.");
      setIsLogin(true);
    }

    setUsername('');
    setPassword('');
  };

  return (
    <div>
      <h2>{isLogin ? 'Login' : 'Signup'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /><br /><br />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br /><br />
        <button type="submit">{isLogin ? 'Login' : 'Signup'}</button>
      </form>
      <br />
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Create Account" : "Already have an account? Login"}
      </button>
    </div>
  );
}

export default AuthForm;
