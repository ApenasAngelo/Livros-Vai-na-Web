import S from "./bookcard.module.scss";

export default function bookcard({ book }) {
  return (
    <article className={S.bookCard} key={book.id}>
      <div className={S.imageContainer}>
        <img src={book.imagem_url} alt={book.titulo} />
      </div>
      <h3>{book.titulo}</h3>
      <p>{book.autor}</p>
      <p>{book.categoria}</p>
    </article>
  );
}
