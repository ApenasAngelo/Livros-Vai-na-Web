import S from "./donated.module.scss";
import book from "../../assets/example-book.png";

import Bookcard from "../../components/Bookcard";

import axios from "axios";
import { useState, useEffect } from "react";

export default function Doados() {
  // Estado para armazenar os livros recebidos da API
  const [books, setBooks] = useState([]);

  // Função assíncrona para buscar os livros na API
  const getBooks = async () => {
    try {
      const response = await axios.get("https://l-vnw-api.onrender.com/livros");
      setBooks(response.data);
    } catch (error) {
      console.error("Erro ao buscar livros:", error);
    }
  };

  // useEffect para chamar a função de busca ao montar o componente
  useEffect(() => {
    getBooks();
  }, []);

  return (
    <section className={S.boxDoados}>
      <h2>Livros Doados</h2>

      <section className={S.boxBooks}>
        <article>
          <div className={S.imageContainer}>
            <img src={book} alt="imagem do livro o protagonista" />
          </div>
          <h3>O Protagonista</h3>
          <p>Susanne Andrade</p>
          <p>Ficção</p>
        </article>

        {books.map((book) => (
          <Bookcard key={book.id} book={book} />
        ))}
      </section>
    </section>
  );
}
