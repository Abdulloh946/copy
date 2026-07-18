import "./requirement.css";

import User from "../../assets/Man in suit and tie.png";
import Money from "../../assets/Price up.png";
import Respect from "../../assets/Star.png";
import Crown from "../../assets/Autocrat.png";
import Product from "../../assets/No sales.png";

function RequirementCard(props) {
  return (
    <div className="requirement-card">
      <div className="requirement-icon">
        <img src={props.icon} alt="" />
      </div>

      <p className="requirement-text">
        {props.text}
      </p>
    </div>
  );
}

function Requirement() {
  return (
    <section className="requirement">

      <h2 className="requirement-title">
        Qo'shilish Shartlari va Talablar
      </h2>

      <p className="requirement-subtitle">
        Kimlar qo'shila oladi?
      </p>

      <div className="requirement-cards">

        <RequirementCard
          icon={User}
          text="Tadbirkor yoki biznes rahbari bo'lgan shaxslar"
        />

        <RequirementCard
          icon={Money}
          text="Oylik daromadi $5000+ bo'lganlar"
        />

        <RequirementCard
          icon={Respect}
          text="Milliy qadriyatlarga hurmat bilan qaraydigan"
        />

        <RequirementCard
          icon={Crown}
          text="Klub a'zolariga qiymat bera oladigan va o'z sohasining mutaxassislari"
        />

        <RequirementCard
          icon={Product}
          text="Klub ichida mahsulot yoki xizmat sotish niyati bo'lmaganlar"
        />

      </div>

    </section>
  );
}

export default Requirement;