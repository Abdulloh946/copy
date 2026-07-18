import "./steps.css";

import Telegram from "../../assets/Telegram (1).png";
import Check from "../../assets/Check mark.png";
import Member from "../../assets/Stairs.png";
import Arrow from "../../assets/Vector (12).png";

function StepsCard(props) {
  return (
    <div className="steps-card">
      <img
        src={props.icon}
        alt=""
        className="steps-icon"
      />

      <p className="steps-text">
        {props.text}
      </p>
    </div>
  );
}



function Steps() {
  return (
    <section className="steps">

      <h2 className="steps-title">
        Qo'shilish bosqichlari:
      </h2>

      <div className="steps-box">

        <StepsCard
          icon={Telegram}
          text="Telegram orqali administratorga ariza yuboring."
        />

        <img
          src={Arrow}
          alt=""
          className="steps-arrow"
        />

        <StepsCard
          icon={Check}
          text="Klub asoschisi Ravshan Turg'unov bilan suhbat o'tkazing."
        />

        <img
          src={Arrow}
          alt=""
          className="steps-arrow"
        />

        <StepsCard
          icon={Member}
          text="Tasdiqdan o'tgach to'lov amalga oshiriladi va klubga a'zo bo'lasiz."
        />

      </div>

    </section>
  );
}

export default Steps;