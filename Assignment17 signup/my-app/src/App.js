import React, { useState } from 'react';
import AuthForm from './AuthForm';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {user ? (
        <>
          <h2>Welcome, {user.username}!</h2>
          <button onClick={() => setUser(null)}>Logout</button>
        </>
      ) : (
        <AuthForm onAuth={(userData) => setUser(userData)} />
      )}
    </div>
  );
}

export default App;
