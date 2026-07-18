import "./application.css";

import Finger from "../../assets/Group (11).png";
import Rectangle from "../../assets/Rectangle (28).png";

function Application() {
  return (
    <section className="application">
      <div className="application-content">
        <h2 className="application-title">
          Qo'shiling va o'z biznesingizni
          <br />
          rivojlantiring!
        </h2>

        <div className="application-form">
          <div className="application-input">
            <label>Ismingiz</label>

            <input
              type="text"
              placeholder="Ismingizni kiriting"
            />
          </div>

          <div className="application-input">
            <label>Telefon raqamingiz</label>

            <input
              type="text"
              placeholder="+998"
            />
          </div>

          <button className="application-btn">
            <span>Ariza topshirish</span>

            <img
              src={Finger}
              alt=""
              className="application-btn-icon"
            />
          </button>
        </div>
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