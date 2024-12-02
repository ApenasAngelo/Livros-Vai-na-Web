import donate_book from "../../assets/donate-book.svg";

import S from "./donate.module.scss";

export default function QueroDoar() {
  return (
    <section className={S.principal}>
      <section className={S.container}>
        <h2>
          Por favor, preencha o formulário com suas informações e as informações
          do Livro
        </h2>
        <form action="">
          <div>
            <img src={donate_book} alt="" />
            <h3>Informações do Livro</h3>
          </div>
          <input type="text" placeholder="Titulo" />
          <input type="text" placeholder="Categoria" />
          <input type="text" placeholder="Autor" />
          <input type="text" placeholder="Link da Imagem" />
        </form>
      </section>
    </section>
  );
}
