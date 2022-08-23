// import react
import React from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

// Import perso
import './index.css';
import Home from './pages/Home'
import Error from "./pages/Error";

import Header from "./components/Header";
import Footer from "./components/Footer";


const container = document.getElementById('root')
const root = createRoot(container)

root.render(
    <Router>
        <Header/>

        <Routes>

            <Route path="/" element={<Home/>}/>

            {/* page d'erreur */}
            <Route path="/*" element={<Error/>}/>

        </Routes>

        <Footer/>

    </Router>
)