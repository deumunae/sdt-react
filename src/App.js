import React from 'react';
import {Routes, Route, Navigate } from "react-router-dom";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Home} from "./pages/Home";
import {Offert} from "./pages/Offert";
import {BannersDemo} from "./pages/BannersDemo";

function App() {
  return (
    <div className="App">
        <Header/>
            <Routes>
                <Route path="/agreement" element={<Offert/>} />
                <Route path="/demo" element={<BannersDemo/>} />
                <Route path="/" element={<Home />} />
                <Route path="*" element={ <Navigate to='/'/> }/>
            </Routes>
        <Footer/>
    </div>
  );
}

export default App;
