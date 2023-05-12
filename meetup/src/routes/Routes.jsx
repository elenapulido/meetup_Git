import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";



const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/commands" element={}></Route>    
                <Route path="/practices" element={}></Route>
                <Route path="/mosaic" element={}></Route> 
                  </Routes>
        </BrowserRouter>
    );
};

export default Router;