import React from "react";
import Navbar from "./Components/Navbar";
import { Searchinputfun } from "./Context/SearchContext";
import Category from "./Components/Category";
import Links from "./Pages/Links";
import Imagedata from "./Pages/Images";
import News from "./Pages/News";
import Video from "./Pages/Videos";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";

export default function App() {
  return (
    <div className="App">
      <Searchinputfun>
        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route
              exact
              path="/links"
              element={
                <>
                  <Navbar />
                  <Category />
                  <Links />
                </>
              }
            />
            <Route
              exact
              path="/images"
              element={
                <>
                  <Navbar />
                  <Category />
                  <Imagedata />
                </>
              }
            />
            <Route
              exact
              path="/news"
              element={
                <>
                  <Navbar />
                  <Category />
                  <News />
                </>
              }
            />
            <Route
              exact
              path="/videos"
              element={
                <>
                  <Navbar />
                  <Category />
                  <Video />
                </>
              }
            />
          </Routes>
        </Router>
      </Searchinputfun>
    </div>
  );
}
