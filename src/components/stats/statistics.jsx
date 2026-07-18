import "./statistics.css";

function StatisticsCard(props) {
  return (
    <div className="statistics-card">
      <h2 className="statistics-number">{props.number}</h2>
      <p className="statistics-text">{props.text}</p>
    </div>
  );
}

function Statistics() {
  return (
    <section className="statistics">
      <h3 className="statistics-title">
        Statistika bilan tanishing:
      </h3>

      <div className="statistics-cards">
        <StatisticsCard
          number="30+"
          text="A'zolar soni"
        />

        <StatisticsCard
          number="10,000$+"
          text="30% a'zolarning oylik daromadi"
        />

        <StatisticsCard
          number="50,000$+"
          text="10% a'zolarning oylik daromadi"
        />
      </div>
    </section>
  );
}

export default Statistics;