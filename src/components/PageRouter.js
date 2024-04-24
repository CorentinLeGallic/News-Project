import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home.js";
import Article from "../pages/Article.js";
import Search from "../pages/Search.js";

export default function PageRouter() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/search" element={<Search />} />
        {/* <Route path="/article" element={<Article />} /> */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
