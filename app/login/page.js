"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = (e) => {
        e.preventDefault(); // Prevent form from reloading

        const storedUserJSON = localStorage.getItem('user');

        if (!storedUserJSON) {
            alert('No user registered!');
            return;
        }

        try {
            const storedUser = JSON.parse(storedUserJSON);

            if (username === storedUser.username && password === storedUser.password) {
                localStorage.setItem('isLoggedIn', 'true');
                router.push('/dashboard'); // Navigate programmatically after login
            } else {
                alert('Wrong username or password!');
            }
        } catch (error) {
            console.error('Error parsing user data:', error);
            alert('Something went wrong. Try again.');
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-gradient" style={{ background: "linear-gradient(135deg, #f8fafc 0%, #a7c7e7 100%)" }}>
            <div className="card shadow-lg p-4" style={{ minWidth: 350, borderRadius: 20 }}>
                <div className="text-center mb-4">
                    <img src="pet1.png" alt="Pet Logo" width={100} className="mb-2" />
                    <h2 className="fw-bold" style={{ color: "#3b5998" }}>Pet Adoption Login</h2>
                    <p className="text-muted">Welcome back! Please login to continue.</p>
                </div>
                <form onSubmit={handleLogin}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="rememberMe" />
                            <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                        </div>
                        <a href="#" className="text-decoration-none" style={{ color: "#3b5998" }}>Forgot password?</a>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary w-100 rounded-pill fw-bold"
                        style={{ background: "#3b5998", border: "none" }}
                    >
                        Login
                    </button>
                </form>
                <div className="text-center mt-3">
                    <span className="text-muted">Don't have an account?</span>
                    <Link href="/register" className="ms-2 text-decoration-none" style={{ color: "#3b5998" }}>Sign up</Link>
                </div>
            </div>
        </div>
    );
}
