import facebook_logo from "../../assets/facebook.png";
import instagram_logo from "../../assets/instagram.png";
import twitter_logo from "../../assets/twitter.png";
import linkedin_logo from "../../assets/linkedin.png";
import youtube_logo from "../../assets/youtube.png";
import S from "./footer.module.scss";

export default function Footer() {
  return (
    <footer>
      <section className={S.boxSocial}>
        <h3>4002-8922</h3>
        <nav>
          <a href="">
            <img src={facebook_logo} alt="" />
          </a>
          <a href="">
            <img src={twitter_logo} alt="" />
          </a>
          <a href="">
            <img src={youtube_logo} alt="" />
          </a>
          <a href="">
            <img src={linkedin_logo} alt="" />
          </a>
          <a href="">
            <img src={instagram_logo} alt="" />
          </a>
        </nav>
      </section>
      <section className={S.boxEnd}>
        <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024 </p>
      </section>
    </footer>
  );
}
