import "./reason.css";

function ReasonCard(props) {
  return (
    <div className="reason-card">
      <h1 className="reason-number">{props.number}</h1>

      <p className="reason-text">
        {props.text}
      </p>
    </div>
  );
}

function Reason() {
  return (
    <section className="reason">

      <h2 className="reason-title">
        Nega klubga qo'shilish kerak?
      </h2>

      <div className="reason-cards">

        <ReasonCard
          number="1"
          text="Tadbirkorga o'zidek fikrlaydigan, o'zi kabi risk ola biladigan va rivojlanishi kerak ekanligini anglagan insonlar jamoasi kerakligi uchun"
        />

        <ReasonCard
          number="2"
          text="Klubda faqat biznesdagi odamlar yig'ilgan, ular bilan qolgan tadbirkorlar o'zini erkin his qiladi va muammolarini ayta oladi, chunki qolganlarda ham shunday muammolar bor bo'lgan."
        />

        <ReasonCard
          number="3"
          text="Biznes o'z asoschisidan oldinga o'tib keta olmaydi, shuning uchun tadbirkor doim fikrlashini rivojlantirishi kerak shunda biznesi ham rivojlanadi."
        />

        <ReasonCard
          number="4"
          text="Klubimizda ishtirokchilarning fikrlashlari keng va ular yaxshi pul topadi, ba'zi ishtirokchilar oyiga $50.000+ sof daromad qiladi."
        />

        <ReasonCard
          number="5"
          text="Networking. Klubda har xil sohalardan odamlar yig'ilgan, yangi tanishlar orqali ko'p ishlarni hal qilsa bo'ladi, har bitta ishtirokchida ham o'ziga yarasha tanishlari va tajribasi bor."
        />

        <ReasonCard
          number="6"
          text="Tadbirkor doim energiyaga to'la bo'lishi kerak. Boshqa tadbirkorlar bilan ko'ngil ochar uchrashuvlar energiyaga to'ldiradi."
        />

      </div>

    </section>
  );
}

export default Reason;