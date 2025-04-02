import S from "./donate.module.scss";
import donate_book from "../../assets/donate-book.svg";

import axios from "axios";
import { useState } from "react";

export default function QueroDoar() {
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [autor, setAutor] = useState("");
  const [imagem_url, setImagem_url] = useState("");

  const enviarDados = async () => {
    // Objeto contendo os dados do livro
    const dadosEnviar = {
      titulo,
      categoria,
      autor,
      imagem_url,
    };

    await axios.post("https://l-vnw-api.onrender.com/doar", dadosEnviar); // Envia os dados para a API via POST

    alert("Livro cadastrado."); // Exibe um alerta informando o sucesso da operação

    // Reseta os campos do formulário
    setTitulo("");
    setCategoria("");
    setAutor("");
    setImagem_url("");
  };

  // Funções para capturar e atualizar os estados com os valores inseridos pelo usuário
  const capturaTitulo = (e) => {
    setTitulo(e.target.value);
    console.log(e.target.value); // Exibe o valor no console para debug
  };

  const capturaCategoria = (e) => {
    setCategoria(e.target.value);
  };

  const capturaAutor = (e) => {
    setAutor(e.target.value);
  };

  const capturaImagem = (e) => {
    setImagem_url(e.target.value);
  };

  return (
    <section className={S.principal}>
      <section className={S.container}>
        <h2>
          Por favor, preencha o formulário com suas informações e as informações
          do Livro
        </h2>

        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <img src={donate_book} alt="" />
            <h3>Informações do Livro</h3>
          </div>

          <input
            type="text"
            placeholder="Titulo"
            onChange={capturaTitulo}
            value={titulo}
          />
          <input
            type="text"
            placeholder="Categoria"
            onChange={capturaCategoria}
            value={categoria}
          />
          <input
            type="text"
            placeholder="Autor"
            onChange={capturaAutor}
            value={autor}
          />
          <input
            type="text"
            placeholder="Link da Imagem"
            onChange={capturaImagem}
            value={imagem_url}
          />

          <button type="submit" onClick={enviarDados}>
            Doar
          </button>
        </form>
      </section>
    </section>
  );
}
