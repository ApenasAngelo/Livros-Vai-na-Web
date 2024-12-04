import S from "./bookcard.module.scss";

export default function bookcard({ book }) {
  return (
    <div className={S.bookCard}>
      <img src={book.image} alt={book.title} />
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <p>{book.year}</p>
    </div>
  );
}
