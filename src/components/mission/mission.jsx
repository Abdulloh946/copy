import "./mission.css";
import MissionImg from "../../assets/10740534 1.png";

function Mission() {
  return (
    <section className="mission">

      <h2 className="mission-subtitle">
        Missiyamiz:
      </h2>

      <div className="mission-box">

        <h1 className="mission-title">
          Tadbirkorlarning fikrlashini kengaytirish va
          <br />
          o'sishiga sababchi bo'lish
        </h1>

        <img
          src={MissionImg}
          alt=""
          className="mission-image"
        />

      </div>

    </section>
  );
}

export default Mission;