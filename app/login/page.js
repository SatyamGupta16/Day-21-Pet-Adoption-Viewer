"use client";
import Link from 'next/link';
import React, { useState } from 'react';
export default function page() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
   

        const handleLogin = () => {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            if (!storedUser) {
                alert('No user registered!');
                return;
            }
            if (username === storedUser.username && password === storedUser.password) {
                localStorage.setItem('isLoggedIn', 'true');
                onLoginSuccess();
            } else {
                alert('Wrong username or password!');
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
                <form>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Username</label>
                        <input type="text" className="form-control"  placeholder="Enter email" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control"  placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="rememberMe" />
                            <label className="form-check-label" htmlFor="rememberMe">
                                Remember me
                            </label>
                        </div>
                        <a href="#" className="text-decoration-none" style={{ color: "#3b5998" }}>Forgot password?</a>
                    </div>
                    <Link href="/dashboard">
                    <button type="submit" className="btn btn-primary w-100 rounded-pill fw-bold" style={{ background: "#3b5998", border: "none" }} onClick={handleLogin}>Login</button>
                    </Link>
                </form>
                <div className="text-center mt-3">
                    <span className="text-muted">Don't have an account?</span>
                    <Link href="/register" className="ms-2 text-decoration-none" style={{ color: "#3b5998" }}>Sign up</Link>
                </div>
            </div>
        </div>
    );
}