'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Register() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (!username || !password) {
      alert('Please enter both username and password');
      return;
    }

    const user = { username, password };
    localStorage.setItem('user', JSON.stringify(user));
    alert('Registered successfully! Redirecting to login...');
    router.push('/login'); // 👈 redirect to login route
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Register</h2>
      <div className="mb-3">
        <label className="form-label">Username</label>
        <input
          className="form-control"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button className="btn btn-primary w-100" onClick={handleRegister}>
        Register
      </button>
    </div>
  );
}