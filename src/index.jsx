// import react
import React from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// Import perso
import './index.scss';

import Home from './pages/Home'
import Fiche_logement from "./pages/Fiche_logement";
import A_propos from "./pages/A_propos";
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

            <Route path="/Fiche_logement/:id" element={<Fiche_logement/>}/>

            <Route path="/A_propos" element={<A_propos/>}/>

            {/* page d'erreur */}
            <Route path="/*" element={<Error/>}/>

        </Routes>

        <Footer/>

    </Router>
)