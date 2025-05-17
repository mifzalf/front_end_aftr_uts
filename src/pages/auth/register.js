import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        const data = {
        username: username,
        password: password,
        };

        axios
        .post("http://localhost:4000/API/register", data)
        .then((res) => {
            alert("Pendaftaranmu berhasil, silakan login");
            navigate("/login");
        })
        .catch((err) => {
            console.error("Error: ", err);
            alert("Terjadi kesalahan saat pendaftaran.");
        });
    };

    return (
        <div>
        <h2>Form Register</h2>
        <form onSubmit={handleRegister}>
            <div>
            <label htmlFor="username">Username</label><br />
            <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                autoComplete="username"
            />
            </div>

            <div>
            <label htmlFor="password">Password</label><br />
            <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="new-password"
            />
            </div>

            <button type="submit">Register</button>
        </form>
        </div>
    );
}

export default Register;
