import "./pricing.css";

function PricingCard(props) {
  return (
    <div className="pricing-card">
      <h3 className="pricing-card-title"><h1></h1>
        {props.title}
      </h3>

      <p className="pricing-card-price">
        {props.price}
      </p>
    </div>
  );
}

function Pricing() {
  return (
    <section className="pricing">

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
        />

        <PricingCard
          title="6 oylik obuna"
          price="6.000.000 so'm"
        />

        <PricingCard
          title="12 oylik obuna"
          price="11.000.000 so'm"
        />

      </div>

    </section>
  );
}

export default Pricing;