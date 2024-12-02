import carrousel1 from "../../assets/carrousel-1.png";
import carrousel2 from "../../assets/carrousel-2.png";
import carrousel3 from "../../assets/carrousel-3.png";
import carrousel4 from "../../assets/carrousel-4.png";

import S from "./home.module.scss";

export default function Inicio() {
  return (
    <main>
      <section className={S.post}>
        <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
      </section>

      <section className={S.devoDoar}>
        <div>
          <h2>Por que devo doar?</h2>
        </div>

        <section className={S.boxCard}>
          <article>
            <img src={carrousel1} alt="networking" />
            <p>
              Oferece livros a quem não tem acesso, ajudando a reduzir a
              exclusão social.
            </p>
          </article>

          <article>
            <img src={carrousel2} alt="pessoa lendo" />
            <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
          </article>

          <article>
            <img src={carrousel3} alt="união de pessoas" />
            <p>
              Fornece conhecimento e inspiração, permitindo que indivíduos
              transformem suas vidas.
            </p>
          </article>

          <article>
            <img src={carrousel4} alt="balança" />
            <p>
              Garante que todos, independentemente de sua condição, tenham
              oportunidades de aprendizado.
            </p>
          </article>
        </section>
      </section>
    </main>
  );
}
