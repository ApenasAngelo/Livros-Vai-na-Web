import logo from "../../assets/logo.png";
import search from "../../assets/search.svg";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "../../pages/Home/index";
import Donated from "../../pages/Donated";
import Donate from "../../pages/Donate";

import S from "./header.module.scss";

export default function Header() {
  return (
    <BrowserRouter>
      <header>
        <section className={S.boxLogo}>
          <img src={logo} alt="Logo" />
          <h1>Livros Vai na Web</h1>
        </section>

        <nav className={S.boxMenu}>
          <ul>
            <li>
              <Link to="/">Início</Link>
            </li>
            <li>
              <Link to="/Donated">Livros Doados</Link>
            </li>
            <li>
              <Link to="/Donate">Quero Doar</Link>
            </li>
          </ul>
        </nav>

        <div className={S.boxInput}>
          <input type="text" placeholder="O que você procura?" />
          <img src={search} alt="lupa" />
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Donated" element={<Donated />} />
        <Route path="/Donate" element={<Donate />} />
      </Routes>
    </BrowserRouter>
  );
}
