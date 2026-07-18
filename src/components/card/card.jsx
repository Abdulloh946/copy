import "./card.css";

import idea from "../../assets/Idea.png";
import energy from "../../assets/Thunder.png";
import people from "../../assets/Businessman.png";
import plus from "../../assets/plus 1.png";

function Card(props) {
  return (
    <div className="card">
      <div className="card-icon">
        <img src={props.icon} alt="" />
      </div>

      <p>{props.title}</p>
    </div>
  );
}

function FeatureCard() {
  return (
    <>
      <h2 className="title">Biz bilan birgalikda:</h2>

      <div className="cards">
        <Card
          icon={idea}
          title="Tajriba almashasiz va yangi g'oyalar olasiz"
        />

        <Card
          icon={energy}
          title="Energiya yig'asiz va yaxshi vaqt o'tkazasiz"
        />

        <Card
          icon={people}
          title="Muvaffaqiyatli tadbirkorlar bilan tanishasiz"
        />

        <Card
          icon={plus}
          title="Boshqa tadbirkorlar tajribasi va konsultatsiyasidan foydalanish imkoniyati"
        />
      </div>

    </>
  );
}

export default FeatureCard;