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


let baseURL = ''
if (process.env.NODE_ENV == 'production')
{
    baseURL = 'Kasa/'
}
else
{
    baseURL = '/'
}

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
    <Router>

        <Header/>

        <Routes>

            <Route exact path={baseURL + ''} element={<Home/>}/>

            <Route path={baseURL + 'Fiche_logement/:id'} element={<Fiche_logement/>}/>

            <Route path={baseURL + 'A_propos'} element={<A_propos/>}/>

            {/* page d'erreur */}
            <Route path={baseURL + '*'} element={<Error/>}/>

        </Routes>

        <Footer/>

    </Router>
)