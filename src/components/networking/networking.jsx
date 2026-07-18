import networking from "../../assets/10740535.png";
import razborlar from "../../assets/10740532.png";
import spikerlar from "../../assets/10740513.png";
import "./networking.css";

function NetworkingCard(props) {
  return (
    <div className="networking-card">
      <img src={props.icon} alt="" />

      <h3>{props.title}</h3>
    </div>
  );
}

function Networking() {
  return (
    <section className="networking">
      <h2 className="networking-title">Klub imtiyozlari:</h2>

      <div className="networking-cards">
        <NetworkingCard
          icon={networking}
          title="Networking"
        />

        <NetworkingCard
          icon={razborlar}
          title="Razborlar"
        />

        <NetworkingCard
          icon={spikerlar}
          title="Mehmon spikerlar"
        />
      </div>
    </section>
  );
}

export default Networking;