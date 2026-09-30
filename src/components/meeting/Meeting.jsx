import "./Meeting.css";

import Online from "../../assets/audience 1.png";
import Discussion from "../../assets/Discuss.png";
import Speaker from "../../assets/Discuss.png";
import Book from "../../assets/Discuss.png";
import Business from "../../assets/Discuss.png";
import Sport from "../../assets/Discuss.png";
import Idea from "../../assets/Discuss.png";
import Recreation from "../../assets/Discuss.png";

function MeetingCard(props) {
  return (
    <div className="meeting-card">
      <img
        src={props.icon}
        alt=""
        className="meeting-icon"
      />

      <div className="meeting-text">
        <h4>{props.title}</h4>
        <p>{props.text}</p>
      </div>
    </div>
  );
}

function Meeting() {
  return (
    <section className="meeting">

      <h2 className="meeting-title">
        Uchrashuv tartibi:
      </h2>

      <div className="meeting-cards">

        <MeetingCard
          icon={Online}
          title="Uchrashuv."
          text="Har oy 2 marotaba klub a'zolari bilan offline ko'rishish."
        />

        <MeetingCard
          icon={Business}
          title="Biznes ekskursiyalar."
          text="Mavjud bizneslarga zavod, showroom, do'kon ekskursiyalari."
        />

        <MeetingCard
          icon={Discussion}
          title="Razborlar."
          text="Ishtirokchi o'z kompaniyasi haqida va muammolarini aytib beradi, jamoa esa fikr beradi."
        />

        <MeetingCard
          icon={Sport}
          title="Sport."
          text="Klub bilan birgalikda marafonlarda qatnashish va dam olish o'yinlari."
        />

        <MeetingCard
          icon={Speaker}
          title="Mehmon spikerlar."
          text="Taniqli va katta tadbirkorlarni mehmon qilib chaqiramiz."
        />

        <MeetingCard
          icon={Idea}
          title="Biznes masterklass."
          text="Yakshanba kunlari biznes mavzusida uchrashuvlar."
        />

        <MeetingCard
          icon={Book}
          title="Book review."
          text="Ishtirokchilar tomonidan o'qilgan kitoblarni qisqa prezentatsiyasi."
        />

        <MeetingCard
          icon={Recreation}
          title="Madaniy hordiq."
          text="Har mavsumda 2-3 marotaba dam olish maskanlariga chiqish."
        />

      </div>

    </section>
  );
}

export default Meeting;