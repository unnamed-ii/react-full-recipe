import React from "react";
import {Route, Routes} from "react-router-dom";

import Home from "./Home";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Recipe from "./Recipe";
import {AnimatePresence} from "framer-motion";
import {useLocation} from "react-router";

function Pages() {
    const location = useLocation();

    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/cuisine/:type" element={<Cuisine/>}/>
                <Route exact path="/searched/:search" element={<Searched/>}/>
                <Route exact path="/recipe/:name" element={<Recipe/>}/>
            </Routes>
        </AnimatePresence>
    )
}

export default Pages;