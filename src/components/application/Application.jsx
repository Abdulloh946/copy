import { useState } from "react";
import "./application.css";

import Finger from "../../assets/Group (11).png";
import Rectangle from "../../assets/Rectangle (28).png";

// Telegram opens the chat by phone number, so applications always reach the owner
const TELEGRAM_PHONE = "+998950227446";
const TELEGRAM_PHONE_LABEL = "+998 95 022 74 46";

function Application(props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+998");
  const [error, setError] = useState("");
  const [sentLink, setSentLink] = useState("");
  const [sentText, setSentText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const digits = phone.replace(/\D/g, "");

    if (name.trim().length < 2) {
      setError("Ismingizni kiriting");
      return;
    }

    if (digits.length !== 12 || !digits.startsWith("998")) {
      setError("Telefon raqamini to'liq kiriting: +998 XX XXX XX XX");
      return;
    }

    setError("");

    const text =
      "Assalomu alaykum! Asoschilar Club'ga ariza.\n" +
      "Ism: " + name.trim() + "\n" +
      "Telefon: +" + digits;

    const link = "https://t.me/" + TELEGRAM_PHONE + "?text=" + encodeURIComponent(text);

    // Prefilled text is not guaranteed for phone links, so also copy it
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).catch(() => {});
    }
    window.open(link, "_blank");

    setSentText(text);
    setSentLink(link);
    setName("");
    setPhone("+998");
  }

  return (
    <section className="application" id={props.id}>
      <div className="application-content">
        <h2 className="application-title">
          {props.title || (
            <>
              Qo'shiling va o'z biznesingizni
              <br />
              rivojlantiring!
            </>
          )}
        </h2>

        <form className="application-form" onSubmit={handleSubmit}>
          <div className="application-input">
            <label>Ismingiz</label>

            <input
              type="text"
              placeholder="Ismingizni kiriting"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="application-input">
            <label>Telefon raqamingiz</label>

            <input
              type="tel"
              placeholder="+998"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <button className="application-btn" type="submit">
            <span>Telegram orqali yuborish</span>

            <img
              src={Finger}
              alt=""
              className="application-btn-icon"
            />
          </button>
        </form>

        <p className="application-hint">
          Ariza Telegram'da <b>{TELEGRAM_PHONE_LABEL}</b> raqamli chatga
          ochiladi. Xabar chiqmasa, nusxalangan matnni joylashtirib yuboring.
        </p>

        {error && <p className="application-error">{error}</p>}

        {sentLink && !error && (
          <p className="application-success">
            Telegram'da {TELEGRAM_PHONE_LABEL} chati ochildi. Ariza matni
            nusxalandi — xabar maydoniga joylashtirib yuboring. Telegram
            ochilmagan bo'lsa,{" "}
            <a href={sentLink} target="_blank" rel="noreferrer">
              shu yerni bosing
            </a>
            .
          </p>
        )}

        {sentLink && !error && (
          <pre className="application-text">{sentText}</pre>
        )}
      </div>

      <img
        src={Rectangle}
        alt=""
        className="application-rectangle"
      />
    </section>
  );
}

export default Application;
