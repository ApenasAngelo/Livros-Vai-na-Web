import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Footer from "./components/Footer/";
import Header from "./components/Header/";

import "./global.scss";

export default function App() {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
}
