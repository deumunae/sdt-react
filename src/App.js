import React from 'react';
import {Routes, Route, Navigate } from "react-router-dom";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Home} from "./pages/Home";


function App() {
  return (
    <div className="App">
        <Header/>
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="*" element={ <Navigate to='/'/> }/>
            </Routes>
        <Footer/>
    </div>
  );
}

export default App;
