import React from "react";

import {BrowserRouter, Link} from "react-router-dom";

import Pages from "./pages/Pages";
import Category from "./components/Category";
import Search from "./components/Search";

import { GiKnifeFork } from "react-icons/gi";

function App() {
  return (
      <>
        <BrowserRouter>
          <div className="nav">
            <Link className="logo" to={'/'}>
              <GiKnifeFork />deliciousss
            </Link>
          </div>
          <Search />
          <Category/>
          <Pages/>
        </BrowserRouter>
      </>
  );
}

export default App;
