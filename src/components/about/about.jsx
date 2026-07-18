import "./about.css";
import AboutImg from "../../assets/IMG_7116 1 (2).png";

function About() {
  return (
    <section className="about">

      <p className="about-subtitle">Biz kimmiz?</p>

      <div className="about-content">

        <div className="about-text">

          <h2 className="about-title">
            Asoschilar Club –
          </h2>

          <p className="about-description">
            biznes va shaxsiy rivojlanishda
            o'sishga intilayotgan tadbirkorlar va
            biznes rahbarlarini birlashtiruvchi
            yopiq hamjamiyat.
          </p>

        </div>

        <div className="about-image">
          <img src={AboutImg} alt="" />
        </div>

      </div>

    </section>
  );
}

export default About;