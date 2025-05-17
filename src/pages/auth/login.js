import React, {useState} from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const navigate = useNavigate();

    const handleLogin =  async (e) => {
        e.preventDefault();

        if (!username || !password ) {
            setError('username dan password harus diisi')
            return;
        }

        try {
            const response = await axios.post('http://localhost:4000/API/login/', {
                username,
                password,
            });

            localStorage.setItem('token', response.data.token);
            navigate("/home");
        } catch (err) {
            setError(err.response?.data?.message || 'terjadi kesalahan saat melakukan login');
        }
    };

    return(
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '2rem', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h2 style={{ textAlign: 'center' }}>Login</h2>
            <form onSubmit={handleLogin}>
                <div style={{ marginBottom: '1rem' }}>
                <label>Username</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    autoComplete="off"
                    style={{ width: '100%', padding: '8px', marginTop: '4px' }}
                />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="off"
                    style={{ width: '100%', padding: '8px', marginTop: '4px' }}
                />
                </div>

                {error && (
                <p style={{ color: 'red', marginBottom: '1rem' }}>{error}</p>
                )}

                <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px' }}>
                Login
                </button>
            </form>

            <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                <span>Don't have an account? </span>
                <Link to="/register">Register</Link>
            </div>
        </div>
    );
}

export default Login