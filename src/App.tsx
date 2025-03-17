import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./components/Home";
import IPhone from "./components/IPhone";
import MacBook from "./components/MacBook";
import Watch from "./components/Watch";
import IMac from "./components/IMac";
import PageLayout from "./components/PageLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/store" element={<Home />} />
          <Route path="/shop/buy-iphone" element={<IPhone />} />
          <Route path="/shop/buy-macbook" element={<MacBook />} />
          <Route path="/shop/buy-watch" element={<Watch />} />
          <Route path="/shop/buy-imac" element={<IMac />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
