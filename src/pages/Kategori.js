import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Kategori() {
const [kategori, setKategori] = useState([]);
const token = localStorage.getItem('token');
useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
        console.error('Token tidak ditemukan, silakan login dulu');
        return;
    }

    axios.get('http://localhost:4000/API/kategori', {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
        }
    })
    .then(res => {
        if (res.data.status) {
            setKategori(res.data.data.data);
        }
    })
    .catch(err => {
        console.error("ERROR FETCH KATEGORI:", err);
        if (err.response) {
            console.error("RESPON:", err.response.data);
        }
    });
}, []);


return (
    <div>
    <h2>Data Kategori</h2>
    <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
        <tr>
            <th>ID Kategori</th>
            <th>Nama Kategori</th>
        </tr>
        </thead>
        <tbody>
        {kategori.map(item => (
            <tr key={item.id_kategori}>
            <td>{item.id_kategori}</td>
            <td>{item.nama_kategori}</td>
            </tr>
        ))}
        </tbody>
    </table>
    </div>
);
}

export default Kategori;
