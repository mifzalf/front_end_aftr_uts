import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Produk from "../pages/Produk";
import Kategori from "../pages/Kategori";
import AddProduct from "../pages/AddProduk";
import EditProduk from "../pages/EditProduk";
import Register from "../pages/auth/register";
import Login from "../pages/auth/login";
import Logout from "../pages/auth/logout";

function Routing(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/produk" element={<Produk />} />
            <Route path="/kategori" element={<Kategori />} />
            <Route path="/produk/add" element={<AddProduct/>}/>
            <Route path="/produk/edit/:id" element={<EditProduk/>}/>
        </Routes>
    );
}
export default Routing;