import "./Meeting.css";

const paths = {
  meet: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
  factory: "M2 20h20M4 20V9l5 3V9l5 3V9l5 3V4h1v16",
  chat: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
  run: "M13 4a2 2 0 1 0 0-.01M7 21l3-6 3 2v4M6 12l3-4 4 1 3 4 3-1M10 15l-2-3",
  mic: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3zM19 10v2a7 7 0 0 1-14 0v-2M12 19v3",
  idea: "M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z",
  book: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15zM4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5",
  mountain: "M8 3l4 8 5-5 5 15H2L8 3z",
};

function Icon({ name }) {
  return (
    <svg
      className="meeting-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={paths[name]} />
    </svg>
  );
}

function MeetingCard(props) {
  return (
    <div className="meeting-card">
      <div className="meeting-icon-box">
        <Icon name={props.icon} />
      </div>

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
          icon="meet"
          title="Uchrashuv."
          text="Har oy 2 marotaba klub a'zolari bilan offline ko'rishish."
        />

        <MeetingCard
          icon="factory"
          title="Biznes ekskursiyalar."
          text="Mavjud bizneslarga zavod, showroom, do'kon ekskursiyalari."
        />

        <MeetingCard
          icon="chat"
          title="Razborlar."
          text="Ishtirokchi o'z kompaniyasi haqida va muammolarini aytib beradi, jamoa esa fikr beradi."
        />

        <MeetingCard
          icon="run"
          title="Sport."
          text="Klub bilan birgalikda marafonlarda qatnashish va dam olish o'yinlari."
        />

        <MeetingCard
          icon="mic"
          title="Mehmon spikerlar."
          text="Taniqli va katta tadbirkorlarni mehmon qilib chaqiramiz."
        />

        <MeetingCard
          icon="idea"
          title="Biznes masterklass."
          text="Yakshanba kunlari biznes mavzusida uchrashuvlar."
        />

        <MeetingCard
          icon="book"
          title="Book review."
          text="Ishtirokchilar tomonidan o'qilgan kitoblarni qisqa prezentatsiyasi."
        />

        <MeetingCard
          icon="mountain"
          title="Madaniy hordiq."
          text="Har mavsumda 2-3 marotaba dam olish maskanlariga chiqish."
        />

      </div>

    </section>
  );
}

export default Meeting;