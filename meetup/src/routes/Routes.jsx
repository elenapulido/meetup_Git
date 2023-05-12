import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Commands from "../views/Commands";
import GoodPractices from "../views/GoodPractices";
import Mosaic from "../views/Mosaic";
import Home from "../views/Home";


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/commands" element={<Commands />}></Route>    
                <Route path="/practices" element={<GoodPractices />}></Route>
                <Route path="/mosaic" element={<Mosaic />}></Route> 
            </Routes>
        </BrowserRouter>
    );
};

export default Router;