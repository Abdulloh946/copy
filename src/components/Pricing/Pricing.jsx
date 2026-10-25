import "./Pricing.css";

function PricingCard(props) {
  return (
    <div className={props.best ? "pricing-card best" : "pricing-card"}>
      {props.best && <span className="pricing-badge">Eng foydali</span>}
      <h3 className="pricing-card-title">
        {props.title}
      </h3>

      <p className="pricing-card-price">
        {props.price}
      </p>

      <p className="pricing-card-month">{props.month}</p>
    </div>
  );
}

function Pricing() {
  return (
    <section className="pricing" id="pricing">

      <h2 className="pricing-title">
        Qo'shilish narxi va a'zolik to'lovi:
      </h2>

      <p className="pricing-subtitle">
        Bir martalik qo'shilish to'lovi:
      </p>

      <h1 className="pricing-price">
        500$
      </h1>

      <hr className="pricing-line" />

      <p className="pricing-subtitle">
        Oylik a'zolik to'lovi (Tariflar)
      </p>

      <div className="pricing-cards">

        <PricingCard
          title="3 oylik obuna"
          price="3.500.000 so'm"
          month="≈ 1.167.000 so'm / oy"
        />

        <PricingCard
          title="6 oylik obuna"
          price="6.000.000 so'm"
          month="1.000.000 so'm / oy"
        />

        <PricingCard
          title="12 oylik obuna"
          price="11.000.000 so'm"
          month="≈ 917.000 so'm / oy"
          best
        />

      </div>

    </section>
  );
}

export default Pricing;