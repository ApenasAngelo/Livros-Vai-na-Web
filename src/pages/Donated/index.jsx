import S from "./donated.module.scss";
import Bookcard from "../../components/BookCard";

import book from "../../assets/example-book.png";

export default function Doados() {
  return (
    <section className={S.boxDoados}>
      <h2>Livros Doados</h2>

      <section className={S.boxBooks}>
        <article>
          <img src={book} alt="imagem do livro o protagonista" />
          <h3>O Protagonista</h3>
          <p>Susanne Andrade</p>
          <p>Ficção</p>
        </article>

        <article>
          <img src={book} alt="imagem do livro o protagonista" />
          <h3>Placeholder title</h3>
          <p>Placeholder name</p>
          <p>Placeholder genre</p>
        </article>

        <article>
          <img src={book} alt="imagem do livro o protagonista" />
          <h3>Placeholder title</h3>
          <p>Placeholder name</p>
          <p>Placeholder genre</p>
        </article>

        <article>
          <img src={book} alt="imagem do livro o protagonista" />
          <h3>Placeholder title</h3>
          <p>Placeholder name</p>
          <p>Placeholder genre</p>
        </article>

        <article>
          <img src={book} alt="imagem do livro o protagonista" />
          <h3>Placeholder title</h3>
          <p>Placeholder name</p>
          <p>Placeholder genre</p>
        </article>

        <article>
          <img src={book} alt="imagem do livro o protagonista" />
          <h3>Placeholder title</h3>
          <p>Placeholder name</p>
          <p>Placeholder genre</p>
        </article>

        <article>
          <img src={book} alt="imagem do livro o protagonista" />
          <h3>Placeholder title</h3>
          <p>Placeholder name</p>
          <p>Placeholder genre</p>
        </article>
      </section>
    </section>
  );
}
