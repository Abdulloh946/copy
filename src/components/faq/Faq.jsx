import "./faq.css";

const items = [
  {
    q: "Klubga kimlar qo'shila oladi?",
    a: "Tadbirkorlar va biznes rahbarlari: oylik daromadi $5000+ bo'lgan, milliy qadriyatlarni hurmat qiladigan, a'zolarga qiymat bera oladigan va klub ichida mahsulot yoki xizmat sotish niyati bo'lmagan shaxslar.",
  },
  {
    q: "A'zolik qancha turadi?",
    a: "Bir martalik qo'shilish to'lovi — 500$. Oylik a'zolik tariflari: 3 oy — 3.500.000 so'm, 6 oy — 6.000.000 so'm, 12 oy — 11.000.000 so'm.",
  },
  {
    q: "Qanday qo'shilaman?",
    a: "Telegram orqali administratorga ariza yuborasiz, klub asoschisi Ravshan Turg'unov bilan suhbatdan o'tasiz. Tasdiqdan so'ng to'lov qilinadi va siz klub a'zosiga aylanasiz.",
  },
  {
    q: "Uchrashuvlar qanchalik tez-tez o'tadi?",
    a: "Har oy 2 marotaba offline uchrashuv bo'ladi. Bundan tashqari biznes ekskursiyalar, razborlar, mehmon spikerlar, masterklasslar, book review va har mavsumda 2–3 marotaba dam olish maskanlariga chiqish bor.",
  },
  {
    q: "Klubda o'z mahsulotimni sotsam bo'ladimi?",
    a: "Yo'q. Klub savdo maydoni emas — bu tajriba almashish va o'sish uchun hamjamiyat. Shu sababli sotish niyati bo'lganlar qabul qilinmaydi.",
  },
];

function Faq() {
  return (
    <section className="faq" id="faq">
      <h2 className="faq-title">Ko'p beriladigan savollar</h2>

      <div className="faq-list">
        {items.map((item) => (
          <details className="faq-item" key={item.q}>
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export default Faq;
